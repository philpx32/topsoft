import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
} from "@ionic/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "./EmployeeContainer.css";
import { close } from "ionicons/icons";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import axios from "axios";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const win: any = window;
  const [showModal, setShowModal] = useState(false);
  const [employeeList, setEmployeeList] = useState<any>([]);
  const [apiToken, setApiToken] = useState("");
  const [empActions, setEmpActions] = useState([]);
  const [empDetails, setEmpDetails] = useState<any>([]);
  const [similarEmps, setSimilarEmps] = useState<any>([]);
  const [openDb, setOpenDb] = useState(
    win.openDatabase("topsoft.db", "1.0", "DEV", 5 * 1024 * 1024)
  );

  let dbObject: SQLiteObject;

  // var db = null;
  useLayoutEffect(() => {
    let db = win.openDatabase("topsoft.db", "1.0", "DEV", 5 * 1024 * 1024);
    setOpenDb(db);
    async function getEmployees() {
      db.transaction(async function (tx: any) {
        tx.executeSql(
          "SELECT e.employee_id,e.name,e.staff_status,d.designation,e.roles,e.time_spent FROM employees e JOIN designation d ON e.curr_designation_id = d.id",
          [],
          function (tx: any, res: any) {
            //setEmployeeList(res.rows);

            const items: any[] = [];
            for (let i = 0; i < res.rows.length; i++) {
              const row = res.rows.item(i);
              items.push(row);
            }
            setTimeout(function () {
              setEmployeeList(items);
            }, 100);

            // console.log(
            //   "res.rows.item(0).cnt: " + JSON.stringify(items) + " -- should be 2"
            // );
          }
        );
      });
    }
    getEmployees();
    // console.log(db);
  }, []);

  useEffect(() => {
    async function fetchEmpActions() {
      var aToken = "";
      try {
        const apiToken = await axios.get(
          "http://developers.rockethealth.africa/api/interview/api-token?api_user=7373902",
          {
            responseType: "text",
          }
        );
        //console.log(sql.data);
        aToken = apiToken.data;
      } catch (error) {}

      try {
        console.log(Object.values(aToken)[0]);
        const actions = await axios.post(
          "https://developers.tmcg.co.ug/api/interview/employees-blog-actions",
          Object.values(aToken)[0]
        );
        //console.log(sql.data);
        var apiActions = actions.data;
        setEmpActions(apiActions);
        console.log(apiActions);
      } catch (error) {}
    }

    fetchEmpActions();
    // console.log(db);
  }, []);

  // function getEmployeeDetails() {}
  async function getEmployeeDetails(aPerson: any) {
    openDb.transaction(async function (tx: any) {
      tx.executeSql(
        "SELECT e.employee_id,e.name,e.staff_status,d.designation AS current,e.roles,e.time_spent, e.start_date FROM employees e JOIN designation d ON e.curr_designation_id = d.id WHERE e.employee_id=?",
        [aPerson.employee_id],
        function (tx: any, res: any) {
          //setEmployeeList(res.rows);

          const items = [];
          for (let i = 0; i < res.rows.length; i++) {
            const row = res.rows.item(i);
            items.push(row);
          }
          console.log(items);
          setEmpDetails(items);
          // console.log(
          //   "res.rows.item(0).cnt: " + JSON.stringify(items) + " -- should be 2"
          // );
        }
      );
      console.log("testing");
      var fName = aPerson.name;
      var fName2 = fName.split(" ");

      let emps: any = [];
      for (let i = 0; i < fName2.length; i++) {
        tx.executeSql(
          "SELECT name FROM employees WHERE name LIKE ? AND name!=?",
          ["%" + fName2[i], fName],
          function (tx: any, res: any) {
            //setEmployeeList(res.rows);
            if (res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                let row = res.rows.item(i);
                emps.push(row);
              }
            }
          }
        );
      }
      setTimeout(function () {
        setSimilarEmps(emps);
        setShowModal(true);
        console.log(emps.length);
      }, 100);
    });

    // }
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 50,
        marginLeft: 100,
        marginRight: 100,
      }}
    >
      {employeeList.length < 1 ? (
        <IonLabel>No Employees found</IonLabel>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Staff Status</th>
              <th>Designation</th>
              <th>Role</th>
              <th>Time Spent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((item: any) => {
              return (
                <tr key={item["employee_id"]}>
                  <td>{item["employee_id"]}</td>
                  <td>{item["name"]}</td>
                  <td>{item["staff_status"]}</td>
                  <td>{item["designation"]}</td>
                  <td>{item["role"]}</td>
                  <td>{item["time_spent"]}</td>
                  <td>
                    <IonButton onClick={() => getEmployeeDetails(item)}>
                      View
                    </IonButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <IonModal isOpen={showModal} showBackdrop={true} backdropDismiss={false}>
        <IonCard
          style={{
            borderRadius: 10,
            backgroundColor: "white",
            paddingTop: 10,
            textAlign: "center",
          }}
        >
          <IonButton
            onClick={() => setShowModal(false)}
            color="danger"
            fill="clear"
            style={{ float: "right" }}
          >
            <IonIcon icon={close} slot="icon-only"></IonIcon>
          </IonButton>
          <IonItem
            style={{
              height: "auto",
            }}
          >
            <div style={{ paddingLeft: 25 }}>
              <IonLabel
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Employee Details
              </IonLabel>
            </div>
          </IonItem>
          <IonItem>
            <IonCardContent>
              {empDetails.map((item: any) => {
                return (
                  <div>
                    <h2>Id: {" " + item["employee_id"]}</h2>
                    <h2>Name: {" " + item["name"]}</h2>
                    <h2>Status: {" " + item["staff_status"]}</h2>
                    <h2>Time Spent: {" " + item["time_spent"]}</h2>
                    <h2>Designation: {" " + item["current"]}</h2>
                    <h2>Start Date: {" " + item["start_date"]}</h2>
                    <br></br>
                    <div style={{ textAlign: "center", marginLeft: 33 }}>
                      <br></br>
                    </div>
                    <br></br>
                  </div>
                );
              })}
              {similarEmps.length === 0 ? (
                <div></div>
              ) : (
                <div>
                  <h1>Similar Employees</h1>
                  <ul>
                    {similarEmps.map((item: any) => {
                      return <li>{item.name}</li>;
                    })}
                  </ul>
                  <br></br>
                </div>
              )}
            </IonCardContent>
          </IonItem>
        </IonCard>
      </IonModal>
    </div>
  );
};

export default ExploreContainer;

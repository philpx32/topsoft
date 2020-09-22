import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
let dbObject: SQLiteObject;
const win: any = window;
let db = win.openDatabase("topsoft.db", "1.0", "DEV", 5 * 1024 * 1024);

export function createTables() {
  try {
    db.transaction(async function (tx: any) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS employees(employee_id INTEGER PRIMARY KEY,name TEXT, curr_designation_id INTEGER, start_date TEXT, prev_designation_id INTEGER, end_date TEXT, roles TEXT,staff_status TEXT,time_spent TEXT);"
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS designation(id INTEGER PRIMARY KEY,designation TEXT);"
      );
    });
  } catch (error) {
    console.log(error);
  }
}
export function insertDesignations() {
  try {
    db.transaction(async function (tx: any) {
      var query = "INSERT INTO designation(id,designation) values(?,?)";

      tx.executeSql(
        query,
        [1, "Manager"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [2, "Backend Developer"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [3, "Accountant"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [4, "Director of Operations"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [5, "Network Admin"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [6, "Team Leader IT"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [7, "Team Leader Finance"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [8, "Finance Manager"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [9, "Systems Admin Intern"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [10, "Communications Manager"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [11, "Asst.Director of Operations"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [12, "General Caretaker"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [13, "Frontend Developer"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [14, "Graphics Designer"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [1, "Manager"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [1, "Manager"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}
export function insertEmployeeRecords() {
  try {
    db.transaction(async function (tx: any) {
      var query =
        "INSERT INTO employees(employee_id,name, curr_designation_id, start_date, prev_designation_id, end_date, roles,staff_status,time_spent) values(?,?,?,?,?,?,?,?,?)";

      tx.executeSql(
        query,
        [
          1,
          "Nabimanya Nelson John Paul",
          1,
          "2019-12-12",
          null,
          "",
          "",
          "active",
          "new",
        ],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [2, "Kenneth Ojakol", 2, "2020-06-13", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [
          3,
          "Thomas Kyamagero",
          3,
          "2020-10-14",
          null,
          "",
          "",
          "pending",
          "new",
        ],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [4, "Paul Nabimanya", 4, "2016-09-21", null, "", "", "active", "old"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [5, "Kyamagero Paul", 5, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [6, "SSali Peter", 6, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [
          7,
          "Zizinga Pius",
          8,
          "2020-09-01",
          7,
          "2020-08-31",
          "",
          "active",
          "old",
        ],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [
          8,
          "Jalia Nabukalu Esther",
          9,
          "2020-09-28",
          null,
          "",
          "",
          "pending",
          "new",
        ],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [9, "John Zizinga", 2, "2021-01-01", null, "", "", "pending", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [10, "Sharon Opoka", 10, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [11, "Nabimanya Paul", 11, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [12, "Ojakol Kenneth", 2, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [13, "Opoka Jane Sharon", 12, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [14, "Kikoyo Paul", 13, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
      tx.executeSql(
        query,
        [15, "Esther Nabukalu", 14, "", null, "", "", "active", "new"],
        function (res: any) {},
        function (err: any) {
          console.log(err);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import EmployeePage from "../components/EmployeePage";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Top soft Inc</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Top soft Inc</IonTitle>
          </IonToolbar>
        </IonHeader>
        <EmployeePage />
      </IonContent>
    </IonPage>
  );
};

export default Home;

import React, { useLayoutEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
// import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { SQLitePorter } from "@ionic-native/sqlite-porter";
import { HTTP } from "@ionic-native/http";
import axios from "axios";
import {
  createTables,
  insertEmployeeRecords,
  insertDesignations,
} from "./components/DatabaseInit";

/* Theme variables */
import "./theme/variables.css";
import { platform } from "os";

const App: React.FC = () => {
  let dbObject: SQLiteObject;
  const win: any = window;
  var db = null;
  useLayoutEffect(() => {
    createTables();
    insertEmployeeRecords();
    insertDesignations();
    // console.log(db);
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

import React from "react";
import styles from "./App.scss";
import { observer } from "mobx-react";

import rootStore from "data/stores";
import RootStoreContext from "context/RootStoreContext";

import MainRouter from "components/MainRouter";

const App = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <div className={styles.app}>
        <MainRouter />
      </div>
    </RootStoreContext.Provider>
  );
};

export default observer(App);

import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

const App = ({ authService }) => (
  <div className={styles.app}>
    <Login authService={authService} />
  </div>
);

export default App;

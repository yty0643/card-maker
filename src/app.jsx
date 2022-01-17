import React, { memo } from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService, cardRepository }) => (
  <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login authService={authService} />} />
        <Route
          path="/maker"
          element={
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

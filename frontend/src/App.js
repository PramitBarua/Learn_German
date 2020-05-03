import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";

import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";

import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <VerticalNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";

import VerticalNavbar from "./components/VerticalNavbar/VerticalNavbar";

import Home from "./pages/Home/Home";
import AddWord from "./pages/AddWord/AddWord";
import AddSentence from "./pages/AddSentence/AddSentence";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <div className={styles.App}>
        <VerticalNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add/word/" component={AddWord} />
          <Route path="/add/sentence/" component={AddSentence} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

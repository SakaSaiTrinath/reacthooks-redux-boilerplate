import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import "./App.css";

function App() {
  return (
    <Switch>
      <GuestRoute exact path="/" component={LoginPage} />
      <UserRoute exact path="/home" component={HomePage} />
      <Route component={() => "404 page"} />
    </Switch>
  );
}

export default App;

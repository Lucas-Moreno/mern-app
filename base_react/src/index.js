import React from 'react';
import ReactDOM from "react-dom";
import App from "../src/App/App";
import Auth from "../src/App/Auth";
import NotFound from "../src/Components/Notfound/NotFound";
import * as serviceWorker from "../src/serviceWorker";
import "./css/style.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";


const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth}></Route>
      <Route exact path="/app" component={App}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

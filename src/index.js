import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

import CssBaseline from '@material-ui/core/CssBaseline';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
  <CssBaseline />
    <App />
  </Router>,
  document.getElementById("root")
);

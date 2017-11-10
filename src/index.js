import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";
import saveResults from "./components/SaveResults";
import App from "./components/App";


ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Travel Registration Form</h2>
      <App onSubmit={saveResults}/>
    </div>
  </Provider>,
  document.getElementById("root")
);

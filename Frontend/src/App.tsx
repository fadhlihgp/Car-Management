import './App.css';
import RouterApp from "./routes";
import {ToastContainer} from "react-toastify";
import React from "react";

function App() {
  return (
      <>
        <RouterApp />
          <ToastContainer />
      </>
  );
}

export default App;

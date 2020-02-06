import React from "react";
import Register from "./components/users/Register";
import "./App.css";

import AlertState from "./context/alerts/AlertState";

function App() {
  return (
    <div className='App'>
      <AlertState>
        <Register />
      </AlertState>
    </div>
  );
}

export default App;

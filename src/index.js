import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./components/SideBar"
import Map from './components/HereMap'

function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

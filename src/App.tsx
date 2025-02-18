import React from "react";
import "./App.scss";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
      </Router>
    </div>
  );
}

export default App;

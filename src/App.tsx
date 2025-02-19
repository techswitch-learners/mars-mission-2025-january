import React from "react";
import "./App.scss";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router";


function App() {
  return (
    <div className="App">
      <Router>
          <NavigationBar />
          <Routes>            
          </Routes>
      </Router>
    </div>

  );
}

export default App;

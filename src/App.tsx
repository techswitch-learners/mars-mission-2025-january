import React from "react";
import "./App.scss";
import { Rover } from "./pages/Rover/Rover.tsx";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Rover />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

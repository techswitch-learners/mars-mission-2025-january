import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;

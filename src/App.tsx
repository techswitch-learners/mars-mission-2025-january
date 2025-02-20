import React from "react";
import "./App.scss";
import NavigationBar from "./Components/NavigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes } from "react-router";
import Footer from "./Components/Footer/Footer.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes></Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

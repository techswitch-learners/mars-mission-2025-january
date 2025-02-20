import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBa />
        <Routes></Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

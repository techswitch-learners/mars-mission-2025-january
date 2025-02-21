import React from "react";
import "./App.scss";
import { Rover } from "./pages/Rover/Rover.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/homepage/Homepage.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rover/:roverName" element={<Rover />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

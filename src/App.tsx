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
              {/* Add routes to homepage and each rover
              <Route path="/" element={<Home />} />
              <Route path = "/rover/:roverName" element={<Rover/> } />   */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;

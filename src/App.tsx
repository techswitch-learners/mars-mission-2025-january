import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/homepage/Homepage.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

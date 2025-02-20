import React from "react";
import "./App.scss";
import NavigationBar from "./components/navigationBar/NavigationBar.tsx";
import { BrowserRouter as Router, Routes } from "react-router";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/homepage/Homepage.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes></Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Events from "./pages/events";
import ParaX from "./components/parax";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ParaX />} />
        <Route exact path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;

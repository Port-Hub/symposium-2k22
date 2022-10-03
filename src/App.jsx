import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/landing";
import Layout from "./components/layout";
import Home from "./pages/home";
import Events from "./pages/events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<Layout> <Outlet /> </Layout>} >
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

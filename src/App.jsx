import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Events from "./pages/events";
import Home from "./pages/home";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<Layout> <Outlet /> </Layout>} >
          <Route path="/events" element={<Events />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

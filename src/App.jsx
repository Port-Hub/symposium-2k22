import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Events from "./pages/events";
import ParaX from "./components/parax";
import Layout from "./components/layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ParaX />} />
        <Route element={<Layout> <Outlet /> </Layout>} >
          <Route path="/events" element={<Events />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

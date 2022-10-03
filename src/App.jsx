import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/landing";
import Layout from "./components/layout";
import routeList from "./components/routes";
import Events from "./pages/events";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<Layout> <Outlet /> </Layout>} >
          {routeList}
          <Route exact path="/events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

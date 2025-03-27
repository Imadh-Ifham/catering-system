import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AdminLayout from "./UI/layouts/AdminLayout.jsx";
import FoodManager from "./features/food/admin/pages/FoodManager.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="food" />} />
          <Route path="food" element={<FoodManager />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import "./Styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import New from "./Pages/New";
import Discover from "./Pages/Discover";
import SearchGen from "./Pages/SearchGen";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/searchGen" element={<SearchGen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

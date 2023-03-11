import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Home, MyTasks } from "./pages";

function App() {
  return (
    <>
      <section className="whole_page">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyTasks" element={<MyTasks />} />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;

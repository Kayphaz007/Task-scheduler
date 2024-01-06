import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Home, MyTasks } from "./pages";
import Board from "./components/Board";
import List from "./components/List";

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
            <Route path="mytasks" element={<MyTasks />}>
              <Route path="board" element={<Board />} />
              <Route path="list" element={<List />} />
            </Route>
          </Routes>
        </div>
      </section>
    </>
  );
}

export default App;

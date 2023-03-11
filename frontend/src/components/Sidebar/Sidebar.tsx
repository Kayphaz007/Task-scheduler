import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sb_section">
      {/* Create Button */}
      <button>Create</button>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/MyTasks"}>My Tasks</NavLink></li>
        <li>Inbox</li>
        <li>Reporting</li>
        <li>Portfolios</li>
        <li>Goals</li>
      </ul>
    </section>
  );
};

export default Sidebar;

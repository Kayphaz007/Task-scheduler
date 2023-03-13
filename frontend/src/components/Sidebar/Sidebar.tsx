import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiStairsGoal } from "react-icons/gi";


const Sidebar = () => {
  const iconSize = 24;
  return (
    <section className="sb_section">
      {/* Create Button */}
      <article className="fSection">
        <ul id="sidey">
          <NavLink to={"/create"} end>
            <li className="link">
              <button className="sb_button"><AiOutlinePlus size={iconSize}/><span>Create</span></button>
            </li>
          </NavLink>
          <NavLink to={"/"} end>
            <li className="">
              <HiOutlineHome size={iconSize} />
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink to={"/mytasks"}>
            <li className="">
              <AiOutlineCheckCircle size={iconSize} />
              <span>MyTasks</span>
            </li>
          </NavLink>
          <NavLink to={"/inbox"}>
            <li className="">
              <BiBell size={iconSize} />
              <span>Inbox</span>
            </li>
          </NavLink>
          <NavLink to={"/reporting"}>
            <li className="">
              <SlGraph size={iconSize}/>
              <span>Reporting</span>
            </li>
          </NavLink>
          <NavLink to={"/portfolios"}>
            <li className=""><VscFolderLibrary size={iconSize}/>
              <span>Portfolios</span>
            </li>
          </NavLink>
          <NavLink to={"/goals"}>
            <li className=""><GiStairsGoal size={iconSize}/>
              <span>Goals</span>
            </li>
          </NavLink>
        </ul>
      </article>
      <hr style={{ width: "100%" }} />
      <article className="sSection">
        <h1 className="link"><span>My Workspace</span> <AiOutlinePlus/></h1>
        <p className="link">profile and colaborators</p>
        <p className="link">task</p>
      </article>
      <hr style={{ width: "100%" }} />
      <article className="tSection"><span>Invite teammates</span></article>
      <hr style={{ width: "100%" }} />
      <article className="lSection"><span>Help & getting started</span></article>
    </section>
  );
};

export default Sidebar;

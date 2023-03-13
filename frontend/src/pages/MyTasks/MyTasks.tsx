import React from "react";
import "./MyTasks.css";
import Frame from "../../components/Frame/Frame";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Board from "../../components/Board";

const MyTasks = () => {
  const link="/mytasks"
  return (
    <>
      <section>
        <header>
          <div className="mtMainHead">
            <p className="mtMainHead_profile">AA</p>
            <div className="mtMainHead_mid">
              <div className="mtMainHead_mid_first">
                <span>My Tasks</span>
                <span>^</span>
              </div>
              <div className="mtMainHead_mid_second">
                <ul>
                  <li>List</li>
                  <NavLink to={`${link}/board`}>
            <li className="">
              <span>Board</span>
            </li>
          </NavLink>
                  <li>Calendar</li>
                  <li>Files</li>
                </ul>
              </div>
            </div>
            <div className="mtMainHead_mid_third">
              <p>Share</p>
              <p>Customize</p>
            </div>
          </div>

        </header>
        <Outlet/>

      </section>
    </>
  );
};

export default MyTasks;

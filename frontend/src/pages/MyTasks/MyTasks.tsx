import React from "react";
import "./MyTasks.css";
import Frame from "../../components/Frame/Frame";

const MyTasks = () => {
  return (
    <>
    <section className="myTask">
        <div className="frame"><Frame/></div>
        <div className="frame"><Frame/></div>
        <div className="frame"><Frame/></div>
    </section>
    </>
  );
};

export default MyTasks;

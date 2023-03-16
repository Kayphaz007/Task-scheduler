import React from "react";
import "./Board.css";
import Frame from "../Frame/Frame";

const Board = () => {
  return (
    <>
      <div className="mtSubHead">
        <p className="mtSubHead_date">Created on 27 Feb</p>
        <p className="mtSubHead_task">
          <span>Incomplete tasks</span>
        </p>
        <p className="mtSubHead_sort">
          <span>Sort</span>
        </p>
      </div>
      <hr />
      <main className="myTask">
        <div className="frame">
          <Frame />
        </div>
        <div className="frame">
          <Frame />
        </div>
        <div className="frame">
          <Frame />
        </div>
      </main>
    </>
  );
};

export default Board;

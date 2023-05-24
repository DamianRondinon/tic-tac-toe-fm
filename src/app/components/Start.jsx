import React from "react";
import Xicon from "./icons/Xicon";
import Ocircle from "./icons/Ocircle"

const Start = () => {
  return (
    <div className="start">
      <div className="start_header">
        <Xicon />
        <Ocircle className="circle"/>
      </div>
      <div className="card shadow">
        <h1 className="text-lg">Pick player 1´st mark</h1>
        <div className="start_player">
            <span
            className="start_player--active"
            >
              <Xicon color="dark" />
            </span>
            <span>
                <Ocircle color="light" />
            </span>
        </div>
        <p className="text-light">remember: x goes first</p>
      </div>
      <div className="start_btn">
        <button className="btn btn-yellow">new game (vs CPU)</button>
        <button className="btn btn-blue">new game (vs Player)</button>
      </div>
    </div>
  );
};

export default Start;

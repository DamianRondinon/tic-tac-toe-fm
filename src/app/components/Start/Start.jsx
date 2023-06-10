import React from "react";
import Xicon from "../icons/Xicon";
import Ocircle from "../icons/Ocircle";
import { GameContext } from "../../Context/GameContext";
import { useContext } from "react";

const Start = () => {
  const { activeUser, setActiveUser, changePlayMode } =
    useContext(GameContext);
  return (
    <div className="start">
      <div className="start_header">
        <Xicon />
        <Ocircle />
      </div>
      <div className="card shadow">
        <h1 className="text-lg">Pick player 1´st mark</h1>
        <div className="start_player">
          <span
            className={activeUser === "x" ? "start_player--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start_player--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Ocircle color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light">remember: x goes first</p>
      </div>
      <div className="start_btn">
        <button
          className="btn btn-yellow"
          onClick={() => changePlayMode("cpu")}
        >
          new game (vs CPU)
        </button>
        <button className="btn btn-blue" onClick={() => changePlayMode("user")}>
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;

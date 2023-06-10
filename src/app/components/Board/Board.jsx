import React, { useContext } from "react";
import Xicon from "../icons/Xicon";
import Ocircle from "../icons/Ocircle";
import BoardCard from "./BoardCard";
import { GameContext } from "../../Context/GameContext";
import { ModalContext } from "../../Context/ModalContext";

const Board = () => {
  const { squares, xnext, ties, winner, winnerLine, playMode, activeUser } =
    useContext(GameContext);
  const { showModal, setModalMode } = useContext(ModalContext);

  const resetGame = () => {
    showModal();
    setModalMode("start");
  };

  const checkUser = (user) => {
    if (playMode === "cpu") {
      if (user === activeUser) {
        return "(you)";
      } else {
        return "(cpu)";
      }
    }
  };

  return (
    <div className="board">
      <div className="board_header">
        <div>
          <Xicon />
          <Ocircle />
        </div>
        <div className="board_turn">
          {!xnext ? (
            <Xicon color="light" size="sm" />
          ) : (
            <Ocircle color="light" size="sm" />
          )}
          turn
        </div>
        <div>
          <button className="btn btn-sm board_restart" onClick={resetGame}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.99988C16.9706 2.99988 21 7.02931 21 11.9999C21 16.9704 
            16.9706 20.9999 12 20.9999C7.02944 20.9999 3 16.9704 3 11.9999C3 9.17261 
            4.30367 6.64983 6.34267 4.99988"
                stroke="#292929"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                d="M3 4.49988H7V8.49988"
                stroke="#292929"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="board_body">
        {squares.map((sq, ix) => (
          <BoardCard
            key={ix}
            index={ix}
            user={sq}
            active={winner && winnerLine && winnerLine.includes(ix)}
          />
        ))}
      </div>
      <div className="board_footer">
        <div className="card bg-blue">
          <p className="text-light"> x {checkUser('x')}</p>
          <strong className="text-2xl"> {ties.x}</strong>
        </div>
        <div className="card bg-light">
          <p className="text-light"> ties </p>
          <strong className="text-2xl"> {ties.x + ties.o}</strong>
        </div>
        <div className="card bg-yellow">
          <p className="text-light"> o {checkUser('o')}</p>
          <strong className="text-2xl"> {ties.o}</strong>
        </div>
      </div>
    </div>
  );
};

export default Board;

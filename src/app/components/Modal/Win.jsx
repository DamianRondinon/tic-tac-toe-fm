import { useContext } from "react";
import Xicon from "../icons/Xicon";
import { GameContext } from "../../Context/GameContext";
import Ocircle from "../icons/Ocircle";

const Win = () => {
  const { winner, handleReset, handleNextRound } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>you win!</p>
          <h3
            className={`score_title ${
              winner === "o" ? "text-yellow" : "text-blue"
            }`}
          >
            {winner === "x" ? <Xicon /> : <Ocircle />}
            Takes the round
          </h3>
        </>
      ) : (
        <h3 className="score_title text-yellow"> No Winner </h3>
      )}
      <div className="score_btn">
        <button className="btn btn-sm " onClick={handleReset}>
          Quit
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;

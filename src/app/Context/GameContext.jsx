import { createContext, useState, useContext, useEffect } from "react";
import { ModalContext } from "./ModalContext";
import { calcBestMove, calcWinner } from "../helpers/calcSquares";

const GameContext = createContext();

const GameState = (props) => {
  const { showModal, setModalMode, hideModal } = useContext(ModalContext);

  const [screen, setScreen] = useState("start");

  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("user");

  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);

  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);

  const [ties, setTies] = useState({ x: 0, o: 0 });

  useEffect(() => {
    checkNoWinner();
    const currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextCpu(squares);
    }
  }, [xnext, winner, screen]);

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen("game");
  };

  const handleSquareClick = (ix) => {
    if (squares[ix] || winner) {
      return;
    }

    const currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    let ns = [...squares];
    ns[ix] = !xnext ? "x" : "o";

    setSquares(ns);
    setXnext(!xnext);

    checkWinner(ns);
  };

  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);

      const ti = { ...ties };
      ti[isWinner.winner] += 1;
      setTies(ti);
      showModal();
      setModalMode("winner");
    }
  };

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      showModal();
      setModalMode("winner");
    }
  };

  const handleReset = () => {
    setSquares(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen("start");
  };

  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setXnext(winner === "x");
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  };

  const cpuNextCpu = (sq) => {
    const bestMove = calcBestMove(sq, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestMove] = !xnext ? "x" : "o";
    setSquares(ns);
    setXnext(!xnext);
    checkWinner(ns);
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        squares,
        xnext,
        ties,
        winner,
        winnerLine,
        playMode,
        handleReset,
        handleNextRound,
        handleSquareClick,
        setActiveUser,
        changePlayMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };

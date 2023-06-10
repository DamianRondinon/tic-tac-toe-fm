'use client'

import Start from "./components/Start/Start";
import Board from "./components/Board/Board";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";
import { GameContext } from "./Context/GameContext";

function Page() {
  const { screen } = useContext(GameContext);
  return (
        <div className="page">
          <div className="container">
            {screen === "start" && <Start />}
            {screen === "game" && <Board />}
          </div>
          <Modal />
        </div>
  );
}

export default Page;

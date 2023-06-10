import React from "react";
import { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { ModalContext } from "../../Context/ModalContext";

const Restart = () => {
  const { handleReset } = useContext(GameContext);
  const { hideModal } = useContext(ModalContext);

  return (
    <div className="restart">
      <h3 className="restart_title"> Restart Game ?</h3>
      <div className="restart_btn">
        <button className="btn btn-sm" onClick={hideModal}>
          no, cancel
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleReset}>
          yes, cancel
        </button>
      </div>
    </div>
  );
};

export default Restart;

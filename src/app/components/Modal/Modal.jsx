import React, { useContext } from "react";
import Win from "./Win";
import Restart from "./Restart";
import { ModalContext } from "../../Context/ModalContext";

const Modal = () => {
  const { show, modalMode } = useContext(ModalContext);
  const {} = useContext(ModalContext);
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal_content">
            <div className="container">
              {modalMode === 'winner' && <Win />}
              {modalMode === 'start' && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

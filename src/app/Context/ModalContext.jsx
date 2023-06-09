'use client'

import { useState, useClient } from "react";
import { createContext } from "react";

const ModalContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('winner');

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <ModalContext.Provider
      value={{
        show,
        modalMode: mode,
        setModalMode: setMode,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalState };

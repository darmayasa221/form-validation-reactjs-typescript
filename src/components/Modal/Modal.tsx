import * as React from "react";
import { createPortal } from "react-dom";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {createPortal(
        children,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;

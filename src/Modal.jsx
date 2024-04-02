import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null); // useRef allows us to keep the same element between renders

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  } // use a default value of null so document.createElement does not get called  multiple times

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current); // whats returned will runs after the component will be unmounted from the DOM
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

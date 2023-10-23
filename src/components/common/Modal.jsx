import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Modal = () => {
  return (
    <div className="modal-contain">
      <div className="modal-icon">
        <TiTickOutline />
      </div>
      <div className="modal-text">Added product to your cart</div>
    </div>
  );
};

export default Modal;

import React from "react";
import Modal from "react-modal";
import {GrClose} from "react-icons/gr";

export default function CommonModal({show, setShow, content}) {
  let iconStyles = { color: "white" };
  return (
      <Modal
        isOpen={show}
        onRequestClose={() => setShow(false)}
        overlayClassName={{
          base: "overlay_base",
          afterOpen: "overlay_after",
          beforeClose: "overlay_before"
        }}
        className={{
          base: "modal_base",
          afterOpen: "modal_after",
          beforeClose: "modal_before"
        }}
        closeTimeoutMS={500}
        ariaHideApp={false}>
        <div className="modal_header">
          <button onClick={() => setShow(false)} className="close_button"><GrClose style={iconStyles} size={20}/></button>
        </div>
        <div id="content" className="modal_content">
          {content}
        </div>
      </Modal>
  )
}
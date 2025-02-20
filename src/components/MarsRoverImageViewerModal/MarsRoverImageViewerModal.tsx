import React from "react";
import "./MarsRoverImageViewerModal.scss";
import Modal from "react-modal";

interface MarsRoverImageViewerProps {
  imageUrl: string;
  imageData: string;
  showModal: boolean;
  handleClick: () => void;
}

export function MarsRoverImageViewerModal({
  imageUrl,
  imageData,
  showModal,
  handleClick,
}: MarsRoverImageViewerProps) {
  return (
    <div className="modalContainer">
      <Modal
        isOpen={showModal}
        onRequestClose={handleClick}
        shouldCloseOnOverlayClick={true}
        className="modalClass"
        ariaHideApp={false}
      >
        <img className="imageClass" src={imageUrl} alt=""></img>
        <button className="closeButtonClass" onClick={handleClick}>
          X
        </button>
        <p className="imageDescriptionClass">{imageData}</p>
      </Modal>
    </div>
  );
}

import React from "react";
import "./MarsRoverImageViewerModal.scss";
import Modal from "react-modal";
//import { SquareX } from "lucide-react";

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
      >
        <img className="imageClass" src={imageUrl}></img>
        <button className="closeButtonClass" onClick={handleClick}>
          X
        </button>
        {/*<SquareX /> */}
        <p className="imageDescriptionClass">{imageData}</p>
      </Modal>
    </div>
  );
}

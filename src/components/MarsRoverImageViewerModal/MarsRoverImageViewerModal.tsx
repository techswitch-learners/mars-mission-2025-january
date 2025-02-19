import React from "react";
import "./MarsRoverImageViewerModal.scss";
import Modal from "react-modal";

interface MarsRoverImageViewer {
  imageUrl: string;
  imageData: string;
}

export function MarsRoverImageViewerModal({
  imageUrl,
  imageData,
  // onClose,
  // open,
}: MarsRoverImageViewer) {
  return (
    <div>
      <img src={imageUrl}></img>
      <button
        className="closeButtonClass"
        onClick={() => {
          // onClose = true;
        }}
      >
        X
      </button>
      <p>{imageData}</p>
    </div>
  );
}

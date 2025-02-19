import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
//import Modal from "react-modal";
import { MarsRoverImageViewerModal } from "./components/MarsRoverImageViewerModal/MarsRoverImageViewerModal.tsx";

function App() {
  //const [open, setOpen] = useState(true);
  /* const handleOpen = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };*/
  return (
    <div className="App">
      {/* <button type="button" onClick={handleOpen}>
        Click Me to Open Modal
      </button> */}
      {/* <Modal isOpen={open} onClose={handleClose} contentLabel="Example Modal">
        test
        
      </Modal> */}
      <MarsRoverImageViewerModal
        imageUrl="https://picsum.photos/seed/picsum/200/300"
        imageData="Rover Image"
      />
    </div>
  );
}

export default App;

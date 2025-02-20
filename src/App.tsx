import React, { useState } from "react";
import "./App.scss";
import { MarsRoverImageViewerModal } from "./components/MarsRoverImageViewerModal/MarsRoverImageViewerModal.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <button type="button" onClick={toggleModal}>
        <img src="https://picsum.photos/seed/picsum/70/70" />
      </button>
      {showModal && (
        <MarsRoverImageViewerModal
          imageUrl="https://picsum.photos/seed/picsum/600/600"
          imageData="Sample image"
          showModal={showModal}
          handleClick={toggleModal}
        />
      )}
    </div>
  );
}
export default App;

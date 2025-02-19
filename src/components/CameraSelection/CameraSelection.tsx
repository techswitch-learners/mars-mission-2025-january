import React from "react";
import { JSX } from "react";

export const CameraSelection = ({
  cameras,
  selectedCamera,
  onCameraChange,
}): JSX.Element => {
  const renderCameras = () => (
    <>
      <label htmlFor="cameras">Choose a camera:</label>
      <select
        id="cameras"
        name="cameras"
        onChange={(event) => onCameraChange(event?.target.value)}
        value={selectedCamera}
      >
        {cameras.map((camera, index) => (
          <option key={`camera-${index}`} value={camera}>
            {camera}
          </option>
        ))}
      </select>
    </>
  );

  const renderNoPhotosText = () => <div>There are no photos for this date</div>;

  return (
    <div>{cameras.length > 0 ? renderCameras() : renderNoPhotosText()}</div>
  );
};

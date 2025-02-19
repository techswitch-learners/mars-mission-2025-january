import React from "react";
import { JSX } from "react";

export const CameraSelection = ({
  cameras,
  selectedCamera,
  onCameraChange,
}): JSX.Element => {
  const renderCameras = (cameras) => (
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
  );

  return (
    <div>
      <label htmlFor="cameras">Choose a camera:</label>
      {cameras ? (
        renderCameras(cameras)
      ) : (
        <div>There are no photos for this date</div>
      )}
    </div>
  );
}

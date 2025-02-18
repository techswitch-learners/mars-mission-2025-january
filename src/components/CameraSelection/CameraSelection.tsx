import React from "react";
import { JSX } from "react";

export const CameraSelection = ({ cameras }): JSX.Element => {
  const renderCameras = (cameras) => (
    <select id="cameras" name="cameras">
      {cameras.map((camera, index) => (
        <option key={`camera-${index}`}>{camera}</option>
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

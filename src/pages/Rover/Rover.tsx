import { useParams } from "react-router-dom";
import { MarsRoverImageSearchHeader } from "../../components/MarsRoverImageSearchHeader/MarsRoverImageSearchHeader.tsx";
import React, { useState } from "react";
import { EarthDateValue } from "../../types.ts";
import { MarsRoverPhotoViewer } from "../../components/MarsRoverPhotoViewer/MarsRoverPhotoViewer.tsx";

export const Rover = () => {
  const { roverName } = useParams();
  const [selectedSolDate, setSelectedSolDate] = useState<string>("");
  const [selectedEarthDate, setSelectedEarthDate] = useState<EarthDateValue>(
    new Date(),
  );
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  return (
    <>
      <MarsRoverImageSearchHeader
        roverName={roverName}
        selectedSolDate={selectedSolDate}
        setSelectedSolDate={setSelectedSolDate}
        selectedEarthDate={selectedEarthDate}
        setSelectedEarthDate={setSelectedEarthDate}
        selectedCamera={selectedCamera}
        setSelectedCamera={setSelectedCamera}
      />
      <MarsRoverPhotoViewer
        roverName={roverName}
        sol={selectedSolDate}
        earth_date={selectedEarthDate}
        camera={selectedCamera}
      />
    </>
  );
};

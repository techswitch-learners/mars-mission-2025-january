import { useParams } from "react-router-dom";
import { MarsRoverImageSearchHeader } from "../../components/MarsRoverImageSearchHeader/MarsRoverImageSearchHeader.tsx";
import React, { useState } from "react";
import { EarthDateValue } from "../../types.ts";

export const Rover = () => {
  const { roverName } = useParams();
  const [selectedSolDate, setSelectedSolDate] = useState<string>("");
  const [selectedEarthDate, setSelectedEarthDate] = useState<EarthDateValue>(
    new Date(),
  );
  const [selectedCamera, setSelectedCamera] = useState<string>("");
  return (
    <MarsRoverImageSearchHeader
      roverName={roverName}
      selectedSolDate={selectedSolDate}
      setSelectedSolDate={setSelectedSolDate}
      selectedEarthDate={selectedEarthDate}
      setSelectedEarthDate={setSelectedEarthDate}
      selectedCamera={selectedCamera}
      setSelectedCamera={setSelectedCamera}
    />
  );
};

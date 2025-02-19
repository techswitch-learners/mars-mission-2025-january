import { useParams } from "react-router-dom";
import { MarsRoverImageSearchHeader } from "../../components/MarsRoverImageSearchHeader/MarsRoverImageSearchHeader.tsx";
import React from "react";

export const Rover = () => {
  const { roverName } = useParams();

  return <MarsRoverImageSearchHeader roverName={roverName} />;
};

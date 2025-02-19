import React from "react";
import { useParams } from "react-router";


function Rover() {
  const { roverName } = useParams<{ roverName: string }>();

  return (
  <div>
  <h1>Welcome to rover page.</h1>
  <p>{roverName}</p>
  </div> );
  }

export default Rover;

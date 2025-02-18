import React from "react";
import {useParams} from "react-router-dom";

function Rover(){
    const {roverName}=useParams<{roverName:string}>();

;
    return(
        <h1>Welcome to {roverName} rover page.</h1>
    );
}

export default Rover;

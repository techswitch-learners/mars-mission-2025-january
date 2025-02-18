import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const rovers = [
    {name:"spirit", image: "/images/spirit.png"},
    {name:"opportunity", image: "/images/opportunity.png"},
    {name:"curiosity", image: "/images/curiosity.png"},
    {name:"perserverance", image: "/images/perseverance.png"},
];

function Home() {
  return (
    <div>
    <div className="title">
        <h1>Mars Rover Explorer</h1>
        <p>Select a rover</p>
    </div>
        <ul>
          {rovers.map((rover)=> (
            <li key={rover.name}>
              <Link to= {`/rover/${rover.name}`}>
                <div>
                    <img src={rover.image} alt={rover.name}/>
                </div>
                <p>{rover.name}</p>
                </Link>
            </li>
          ))}
          </ul>
        </div>
   
  );
}

export default Home;

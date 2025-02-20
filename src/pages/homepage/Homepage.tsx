import React from "react";
import { Link } from "react-router";
import "./Homepage.scss";

const rovers = [
  { name: "spirit", image: "/images/spirit.png" },
  { name: "opportunity", image: "/images/opportunity.png" },
  { name: "curiosity", image: "/images/curiosity.png" },
  { name: "perserverance", image: "/images/perseverance.png" },
];

function Home() {
  return (
    <div className="Page">
      <h1>Mars Rover Explorer</h1>
      <p>Choose a rover to explore images</p>
      <ul>
        {rovers.map((rover) => (
          <li key={rover.name}>
            <Link to={`/rover/${rover.name}`}>
              <div className="roverimage">
                <img src={rover.image} alt={rover.name} />
              </div>
              <div className="rovertext">
                <p>{rover.name.toUpperCase()}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

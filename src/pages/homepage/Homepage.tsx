import React from "react";
import { Link } from "react-router";
import "./Homepage.scss";
import RenderMars from "../../components/renderMars/RenderMars.tsx";

const roverSetOne = [
  { name: "spirit", image: "/images/spirit.png" },
  { name: "perserverance", image: "/images/perseverance.png" },
];

const roverSetTwo = [
  { name: "opportunity", image: "/images/opportunity.png" },
  { name: "curiosity", image: "/images/curiosity.png" },
];

function Home() {
  return (
    <div className="page">
      <h1>Mars Rover Explorer</h1>
      <p>Choose a rover to explore images</p>
      <div className="rovercontent">
        <ul className="roversetone">
          {roverSetOne.map((rover) => (
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

        <div className="mars">
          <RenderMars />
        </div>

        <ul className="roversettwo">
          {roverSetTwo.map((rover) => (
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
    </div>
  );
}

export default Home;

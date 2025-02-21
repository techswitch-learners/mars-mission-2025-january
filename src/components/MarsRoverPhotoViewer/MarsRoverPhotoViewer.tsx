import { useEffect, useState } from "react";
import React from "react";
import "./MarsRoverPhotoViewer.scss";
import { EarthDateValue } from "../../types";

export type MarsRoverPhotoResponse = {
  photos: Photo[];
};

type Photo = {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
};

type Camera = {
  name: string;
  full_name: string;
};

type Rover = {
  name: string;
};

export const MarsRoverPhotoViewer = ({
  roverName = "Curiosity",
  sol,
  earth_date,
  camera,
}: {
  roverName?: string;
  sol?: string;
  earth_date?: EarthDateValue;
  camera: string;
}) => {
  const [roverThumbnails, setRoverThumbnails] =
    useState<MarsRoverPhotoResponse>();
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    let day: string;
    if (sol) {
      day = `sol=${sol}`;
    } else if (earth_date) {
      const date = (earth_date as Date).toISOString().slice(0, 10);
      day = `earth_date=${date}`;
    }

    if (!camera) {
      return;
    }

    fetch(
      `https://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/photos?${day}&camera=${camera}`,
    )
      .then((response) => response.json())
      .then((result) => {
        setRoverThumbnails(result);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [roverName, sol, earth_date, camera]);

  if (error) {
    return <div>Error?</div>;
  }

  if (!roverThumbnails) {
    return <div>Unable to find images</div>;
  } else {
    return (
      <div>
        <ul className="thumbnails-list">
          {roverThumbnails.photos.map((photo) => (
            <li className="thumbnail-item" key={photo.id} onClick={toggleModal}>
              <img
                src={photo.img_src}
                alt={`${photo.rover.name}, ${photo.camera.name}, ${photo.id}`}
              />
              {showModal && (
                <MarsRoverImageViewerModal
                  imageUrl={photo.img_src}
                  imageData={`${photo.rover.name} - ${photo.camera.name}`}
                  showModal={showModal}
                  handleClick={toggleModal}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

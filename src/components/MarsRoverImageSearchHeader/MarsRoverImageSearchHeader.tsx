import React from "react";
import { useEffect, useState } from "react";
import Calendar from 'react-calendar';

interface ManifestModel {
  photo_manifest: {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    photos: Photo[];
  };
}

interface Photo {
  sol: number;
  earth_date: string;
  total_photos: 3702;
  cameras: [];
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const MarsRoverImageSearchHeader = () => {
  const [manifestData, setManifestData] = useState<ManifestModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [sol, setSol] = useState<string>("");
  const [cameras, setCameras] = useState([]);
  const [earthDate, setEarthDate] = useState<Value>(new Date());
  const roverName: string = "curiosity"; //TODO: need to change for /rover/:roverId
  const min = 0;
  const max = manifestData?.photo_manifest?.max_sol ?? 1;

  const handleChange = (event) => {
    const sol = event.target.value;

    if (sol === "" || (Number(sol) >= 0 && Number(sol) <= max)) {
      setSol(sol);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=DEMO_KEY`,
    )
      .then((response) => response.json())
      .then((data) => setManifestData(data))
      .catch(() => {
        setError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const photoData = manifestData?.photo_manifest?.photos ?? [];
    const updateCameras = () => {
      for (const photos of photoData) {
        if (photos.sol === Number(sol)) {
          setCameras(photos.cameras);
        }
      }
    };

    updateCameras();
  }, [sol, manifestData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Service is temporary unavailable</div>;
  }

  const renderCameras = () => (
    <select id="cameras" name="cameras">
      {cameras.map((camera) => (
        <option>{camera}</option>
      ))}
    </select>
  );

  const getActiveStartDate = () => {
    const date = manifestData?.photo_manifest?.landing_date;

    if (date) {
      return new Date(date);
    }

    return new Date();
  };

  const getYesterday = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  };

  return (
    <div>
      <h1>{manifestData?.photo_manifest?.name ?? ""}</h1>
      <p>Placeholder image</p>
      <div>
        Please enter the sol date between 0 and{" "}
        {manifestData?.photo_manifest?.max_sol} or select an Earth date from the
        calendar.
        <div>
          <input
            type="number"
            value={sol}
            min={min}
            max={max}
            onChange={handleChange}
            name="sol-input"
          />
        </div>
        <div>
          <Calendar
            onChange={setEarthDate}
            value={earthDate}
            activeStartDate={getActiveStartDate()}
            maxDate={getYesterday()}
          />
        </div>
      </div>
      <div>
        <label htmlFor="cameras">Choose a camera:</label>
        {cameras ? (
          renderCameras()
        ) : (
          <div>There are no photos for this sol</div>
        )}
      </div>
    </div>
  );
};

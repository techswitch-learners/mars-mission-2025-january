import React from "react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MarsRoverImageSearchHeader.scss";
import { SolarDateSelection } from "../SolarDateSelection/SolarDateSelection.tsx";
import { EarthDateValue, SolarDate } from "../../types.ts";
import { getActiveStartDate, getYesterday } from "../../utils.ts";
import { CameraSelection } from "../CameraSelection/CameraSelection.tsx";
import { fetchData } from "../../fetch.ts";

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

export const MarsRoverImageSearchHeader = () => {
  const [manifestData, setManifestData] = useState<ManifestModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  //TODO: next states should probably go to the Rover page to wire up this component with the image selector
  const [solarDate, setSolarDate] = useState(SolarDate.SOL);
  const [solDate, setSolDate] = useState<string>("");
  const [earthDate, setEarthDate] = useState<EarthDateValue>(new Date());
  const [cameras, setCameras] = useState([]);
  //TODO: need to change for /rover/:roverId after adding Router
  const roverName: string = "curiosity";

  const min = 0;
  const max = manifestData?.photo_manifest?.max_sol ?? 1;

  useEffect(() => {
    if (roverName) {
      fetchData(
        `https://mars-photos.herokuapp.com/api/v1/manifests/${roverName}`,
      )
        .then((data) => {
          setManifestData(data);
        })
        .catch((error) => {
          setError(true);
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    const photoData = manifestData?.photo_manifest?.photos ?? [];

    if (solarDate === SolarDate.SOL) {
      for (const photos of photoData) {
        if (photos.sol === Number(solDate)) {
          setCameras(photos.cameras);
        }
      }
    }
    //TODO: add earth date connection
  }, [solDate, earthDate, manifestData]);

  const handleChangeSolInput = (event) => {
    const sol = event.target.value;

    if (sol === "" || (Number(sol) >= min && Number(sol) <= max)) {
      setSolDate(sol);
    }
  };

  const handleChangeSolarDate = (date: SolarDate): void => {
    setSolarDate(date);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Service is temporary unavailable</div>;
  }

  const renderSolInput = () => (
    <div>
      <input
        type="number"
        value={solDate}
        min={min}
        max={max}
        onChange={handleChangeSolInput}
        name="sol-input"
      />
    </div>
  );

  const renderCalendar = () => (
    <div className="earth-date-calendar">
      <Calendar
        onChange={setEarthDate}
        value={earthDate}
        activeStartDate={getActiveStartDate(
          manifestData?.photo_manifest?.landing_date,
        )}
        maxDate={getYesterday()}
      />
    </div>
  );

  const renderDateSelectionPrompt = () => (
    <p>
      Please enter the Sol date between {min} and {max} <b>or</b> select an
      Earth date from the calendar.
    </p>
  );

  return (
    <div>
      <h1>{manifestData?.photo_manifest?.name ?? ""}</h1>
      {renderDateSelectionPrompt()}
      <SolarDateSelection
        solarDate={solarDate}
        onChangeSolarDate={handleChangeSolarDate}
      />
      {solarDate === SolarDate.SOL ? renderSolInput() : renderCalendar()}
      <CameraSelection cameras={cameras} />
    </div>
  );
};

import React from "react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MarsRoverImageSearchHeader.scss";
import { DateTypeSelection } from "../DateTypeSelection/DateTypeSelection.tsx";
import { DateTypes, EarthDateValue } from "../../types.ts";
import { getMinDate, getYesterday } from "../../utils.ts";
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
    photos: RoverDayPhotosDetails[];
  };
}

interface RoverDayPhotosDetails {
  sol: number;
  earth_date: string;
  total_photos: number;
  cameras: string[];
}

interface MarsRoverImageSearchHeaderInterface {
  roverName?: string;
  selectedSolDate: string;
  setSelectedSolDate: (solDate: string) => void;
  selectedEarthDate: EarthDateValue;
  setSelectedEarthDate: (earthDate: EarthDateValue) => void;
  selectedCamera: string;
  setSelectedCamera: (selectedCamera: string) => void;
}

export const MarsRoverImageSearchHeader = ({
  roverName,
  selectedSolDate,
  setSelectedSolDate,
  selectedEarthDate,
  setSelectedEarthDate,
  selectedCamera,
  setSelectedCamera,
}: MarsRoverImageSearchHeaderInterface) => {
  const [manifestData, setManifestData] = useState<ManifestModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [dateType, setDateType] = useState(DateTypes.SOL);
  const [cameras, setCameras] = useState<string[]>([]);
  const [showCameraSelection, setShowCameraSelection] =
    useState<boolean>(false);

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
  }, [roverName]);

  useEffect(() => {
    const photoData = manifestData?.photo_manifest?.photos ?? [];
    let camerasUpdated = false;
    const isSolRequiredDate = (sol: number): boolean =>
      dateType === DateTypes.SOL && String(sol) === selectedSolDate;

    const isEarthRequiredDate = (earth_date: string): boolean =>
      dateType === DateTypes.EARTH &&
      new Date(earth_date).getTime() === (selectedEarthDate as Date).getTime();

    for (const photos of photoData) {
      if (
        isSolRequiredDate(photos.sol) ||
        isEarthRequiredDate(photos.earth_date)
      ) {
        setCameras(photos.cameras);
        setSelectedCamera(photos.cameras[0]);
        camerasUpdated = true;
        break;
      }
    }

    if (!camerasUpdated) {
      setCameras([]);
      setSelectedCamera("");
    }
  }, [
    selectedSolDate,
    selectedEarthDate,
    setSelectedCamera,
    dateType,
    manifestData?.photo_manifest?.photos,
  ]);

  const handleChangeSolInput = (event) => {
    const sol = event.target.value;

    if (sol === "") {
      setShowCameraSelection(false);
    } else {
      setShowCameraSelection(true);
    }

    if (Number(sol) >= min && Number(sol) <= max) {
      setSelectedSolDate(sol);
    }
  };

  const handleChangeDateTypes = (date: DateTypes): void => {
    setDateType(date);
    setSelectedSolDate("");
    setSelectedEarthDate(new Date());
    setShowCameraSelection(false);
  };

  const handleChangeCalendar = (value) => {
    setSelectedEarthDate(value);
    setShowCameraSelection(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Service is temporary unavailable</div>;
  }

  const renderSolInput = () => (
    <div className="sol-input-container">
      <input
        type="number"
        value={selectedSolDate}
        min={min}
        max={max}
        onChange={handleChangeSolInput}
        name="sol-input-field"
      />
    </div>
  );

  const renderCalendar = () => (
    <div data-testid="earth-date-calendar" className="earth-date-calendar">
      <Calendar
        onChange={handleChangeCalendar}
        value={selectedEarthDate}
        minDate={getMinDate(manifestData?.photo_manifest?.landing_date)}
        maxDate={getYesterday()}
      />
    </div>
  );

  const renderDateSelectionPrompt = () => (
    <p>
      Please enter the Sol date between {min} and {max} or select an Earth date
      from the calendar. The camera selection may change according to selected
      date. Note that on some days, the rover did not take photos (for whatever
      reason) and so no photos will be available for that day!
    </p>
  );

  return (
    <div className="mars-rover-image-search-header">
      <h2>{manifestData?.photo_manifest?.name ?? ""}</h2>
      {renderDateSelectionPrompt()}
      <DateTypeSelection
        dateType={dateType}
        onChangeDateType={handleChangeDateTypes}
      />
      {dateType === DateTypes.SOL ? renderSolInput() : renderCalendar()}
      {showCameraSelection && (
        <CameraSelection
          cameras={cameras}
          selectedCamera={selectedCamera}
          onCameraChange={setSelectedCamera}
        />
      )}
    </div>
  );
};

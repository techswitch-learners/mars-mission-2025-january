import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MarsRoverImageSearchHeader } from "./MarsRoverImageSearchHeader";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { EarthDateValue } from "../../types";

describe("MarsRoverImageSearchHeader", () => {
  beforeEach(() => {
    const mockedResponse = {
      photo_manifest: {
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 4457,
        max_date: "2025-02-18",
        total_photos: 699154,
        photos: [
          {
            sol: 0,
            earth_date: "2012-08-06",
            total_photos: 3702,
            cameras: ["CHEMCAM", "FHAZ", "MARDI", "RHAZ"],
          },
          {
            sol: 1,
            earth_date: "2012-08-07",
            total_photos: 16,
            cameras: ["MAHLI", "MAST", "NAVCAM"],
          },
          {
            sol: 10,
            earth_date: "2012-08-16",
            total_photos: 26,
            cameras: ["CHEMCAM", "MAHLI", "NAVCAM"],
          },
          {
            sol: 19,
            earth_date: "2012-08-25",
            total_photos: 444,
            cameras: ["CHEMCAM", "MAST"],
          },
        ],
      },
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedResponse),
      status: 200,
      ok: true,
    });
  });

  it.only("Renders correct rover name", async () => {
    render(
      <MarsRoverImageSearchHeader
        roverName={"Curiosity"}
        selectedSolDate={"10"}
        setSelectedSolDate={jest.fn()}
        selectedEarthDate={"2012-08-07" as unknown as EarthDateValue}
        setSelectedEarthDate={jest.fn()}
        selectedCamera={"CHEMCAM"}
        setSelectedCamera={jest.fn()}
      />,
    );

    await waitFor(() => {
      const header = screen.getByText(/Curiosity/i);
      expect(header).toBeVisible();
    });
  });

  it("Renders input form on selection for Sol (spinbutton)", async () => {
    render(
      <MarsRoverImageSearchHeader
        roverName={"Curiosity"}
        selectedSolDate={"10"}
        setSelectedSolDate={jest.fn()}
        selectedEarthDate={"2012-08-07" as unknown as EarthDateValue}
        setSelectedEarthDate={jest.fn()}
        selectedCamera={"CHEMCAM"}
        setSelectedCamera={jest.fn()}
      />,
    );
    await waitFor(() => {
      const inputField = screen.getByRole("spinbutton");
      expect(inputField).toBeVisible();
    });
  });

  it("Renders calendar on selection for Earth date", async () => {
    render(
      <MarsRoverImageSearchHeader
        roverName={"Curiosity"}
        selectedSolDate={"10"}
        setSelectedSolDate={jest.fn()}
        selectedEarthDate={"2012-08-07" as unknown as EarthDateValue}
        setSelectedEarthDate={jest.fn()}
        selectedCamera={"CHEMCAM"}
        setSelectedCamera={jest.fn()}
      />,
    );
    let radios = [];
    await waitFor(() => {
      radios = screen.getAllByRole("radio");
    });
    await userEvent.click(radios[1]);
    const calendarContainer = screen.getByTestId("earth-date-calendar");
    expect(calendarContainer).toBeVisible();
    const calendar = calendarContainer.querySelector(".react-calendar");
    expect(calendar).toBeInTheDocument();
  });

  it("doesn's show CameraSelection if user has chosen the date without images", async () => {
    render(
      <MarsRoverImageSearchHeader
        roverName={"Curiosity"}
        selectedSolDate={"10"}
        setSelectedSolDate={jest.fn()}
        selectedEarthDate={"2012-08-07" as unknown as EarthDateValue}
        setSelectedEarthDate={jest.fn()}
        selectedCamera={"CHEMCAM"}
        setSelectedCamera={jest.fn()}
      />,
    );

    let inputField;

    await waitFor(() => {
      inputField = screen.getByRole("spinbutton");
    });

    await userEvent.type(inputField, "3");

    const textElement = screen.getByText(/There are no photos for this date/i);
    expect(textElement).toBeVisible();
  });
});

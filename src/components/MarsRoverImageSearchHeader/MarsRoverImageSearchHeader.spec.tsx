import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MarsRoverImageSearchHeader } from "./MarsRoverImageSearchHeader";
import "@testing-library/jest-dom";
import { act } from "react";
import userEvent from "@testing-library/user-event";

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

  it("Renders correct rover name", async () => {
    act(() => {
      render(<MarsRoverImageSearchHeader />);
    });

    await waitFor(() => {
      const header = screen.getByText(/Curiosity/i);
      expect(header).toBeVisible();
    });
  });

  it("Renders input form on selection for Sol (spinbutton)", async () => {
    act(() => {
      render(<MarsRoverImageSearchHeader />);
    });

    await waitFor(() => {
      const inputField = screen.getByRole("spinbutton");
      expect(inputField).toBeVisible();
    });
  });

  it("Renders calendar on selection for Earth date", async () => {
    act(() => {
      render(<MarsRoverImageSearchHeader />);
    });

    await waitFor(() => {
      const radios = screen.getAllByRole("radio");
      userEvent.click(radios[1]);
      const calendarContainer = screen.getByTestId("earth-date-calendar");
      expect(calendarContainer).toBeVisible();
      const calendar = calendarContainer.querySelector(".react-calendar");
      expect(calendar).toBeInTheDocument();
    });
  });
});

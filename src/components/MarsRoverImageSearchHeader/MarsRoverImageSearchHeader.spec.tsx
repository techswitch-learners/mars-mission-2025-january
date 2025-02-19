import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MarsRoverImageSearchHeader } from "./MarsRoverImageSearchHeader";
import "@testing-library/jest-dom";
import { act } from "react";

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

  it("Renders radio buttons", async () => {
    act(() => {
      render(<MarsRoverImageSearchHeader />);
    });

    await waitFor(() => {
      const radios = screen.getAllByRole("radio");
      expect(radios.length).toBe(2);
    });
  });
});

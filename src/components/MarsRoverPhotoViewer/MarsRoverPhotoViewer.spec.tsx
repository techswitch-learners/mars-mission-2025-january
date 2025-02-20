import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  MarsRoverPhotoResponse,
  MarsRoverPhotoViewer,
} from "./MarsRoverPhotoViewer";
import "./MarsRoverPhotoViewer.scss";

const mockPhotoResponse: MarsRoverPhotoResponse = {
  photos: [
    {
      id: 960932,
      sol: 0,
      camera: {
        name: "MAST",
        full_name: "Mast Camera",
      },
      img_src: "",
      earth_date: "",
      rover: {
        name: "Curiosity",
      },
    },
  ],
};

describe("MarsRoverPhotoViewer", () => {
  const mockJson = jest.fn();
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: mockJson,
    });
  });

  it("Display photos", async () => {
    mockJson.mockResolvedValue(mockPhotoResponse);
    render(
      <MarsRoverPhotoViewer roverName="Curiosity" camera="mast" sol="960932" />,
    );
    const image = await screen.findByAltText("Curiosity, MAST, 960932");
    expect(image).toBeVisible();
  });
});

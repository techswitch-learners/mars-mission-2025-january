import React from "react";
import { render, screen } from "@testing-library/react";
import { CameraSelection } from "./CameraSelection";
import "@testing-library/jest-dom";

describe("Checks that CameraSelection component", () => {
  it("renders label", () => {
    render(
      <CameraSelection
        cameras={["CHEMCAM", "FHAZ", "MARDI", "RHAZ"]}
        selectedCamera={"CHEMCAM"}
        onCameraChange={() => {}}
      />,
    );

    const labelElement = screen.getByText(/Choose a camera:/i);
    expect(labelElement).toBeVisible();
  });

  it("renders cameras", () => {
    render(
      <CameraSelection
        cameras={["CHEMCAM", "FHAZ", "MARDI", "RHAZ"]}
        selectedCamera={"CHEMCAM"}
        onCameraChange={() => {}}
      />,
    );
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(4);
    expect(options[0]).toHaveValue("CHEMCAM");
  });

  it("doesn't render cameras if list is empty", () => {
    render(
      <CameraSelection
        cameras={[]}
        selectedCamera={""}
        onCameraChange={() => {}}
      />,
    );

    const textElement = screen.getByText(/There are no photos for this date/i);
    expect(textElement).toBeVisible();
  });
});

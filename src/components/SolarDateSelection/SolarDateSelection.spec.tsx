import React from "react";
import { render, screen } from "@testing-library/react";
import { SolarDateSelection } from "./SolarDateSelection";
import { SolarDate } from "../../types";
import "@testing-library/jest-dom";

describe("Checks that SolarDateSelection component", () => {
  it("renders legend", () => {
    render(
      <SolarDateSelection
        solarDate={SolarDate.SOL}
        onChangeSolarDate={() => {}}
      />,
    );

    const legendElement = screen.getByText(/Select Sol or Earth date/i);
    expect(legendElement).toBeVisible();
  });

  it("renders radio buttons", () => {
    render(
      <SolarDateSelection
        solarDate={SolarDate.SOL}
        onChangeSolarDate={() => {}}
      />,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios.length).toBe(2);
  });

  it("first radio button is checked", () => {
    render(
      <SolarDateSelection
        solarDate={SolarDate.SOL}
        onChangeSolarDate={() => {}}
      />,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toBeChecked();
  });
});

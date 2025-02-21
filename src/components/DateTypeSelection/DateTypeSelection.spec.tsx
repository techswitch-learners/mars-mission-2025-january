import React from "react";
import { render, screen } from "@testing-library/react";
import { DateTypeSelection } from "./DateTypeSelection";
import { DateTypes } from "../../types";
import "@testing-library/jest-dom";

describe("Checks that DateTypeSelection component", () => {
  it("renders legend", () => {
    render(
      <DateTypeSelection
        dateType={DateTypes.SOL}
        onChangeDateType={() => {}}
      />,
    );

    const legendElement = screen.getByText(/Select Sol or Earth date/i);
    expect(legendElement).toBeVisible();
  });

  it("renders radio buttons", () => {
    render(
      <DateTypeSelection
        dateType={DateTypes.SOL}
        onChangeDateType={() => {}}
      />,
    );
    const radios = screen.getAllByRole("radio");
    expect(radios.length).toBe(2);
  });

  it("first radio button is checked", () => {
    render(
      <DateTypeSelection
        dateType={DateTypes.SOL}
        onChangeDateType={() => {}}
      />,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios[0]).toBeChecked();
  });
});

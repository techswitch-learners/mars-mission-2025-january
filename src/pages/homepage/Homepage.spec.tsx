import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import Home from "./Homepage.tsx";

describe("HomePage", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText("Mars Rover Explorer")).toBeInTheDocument();
  });

  it("navigates to the correct rover page when a rover is clicked", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const roverLink = screen.getByRole("link", { name: /CURIOSITY/i });
    expect(roverLink.getAttribute("href")).toBe("/rover/curiosity");
  });
});

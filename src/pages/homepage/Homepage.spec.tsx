import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter,Router, Routes, Route } from "react-router";
import "@testing-library/jest-dom";
import Home from "./Homepage.tsx";
import Rover from "../rover/Rover.tsx";


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
      <MemoryRouter initialEntries={['/']}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rover/:roverName" element={<Rover />} />
      </Routes>
      </MemoryRouter>);
      
      const user = userEvent.setup();

      const roverlink = screen.getByRole('link', {name: /CURIOSITY/i})
      await user.click(roverlink);
      
      expect(screen.getByText(/curiosity/i)).toBeInTheDocument();


});
});










     
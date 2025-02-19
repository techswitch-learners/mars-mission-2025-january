import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter,Router, Routes, Route } from "react-router";
import "@testing-library/jest-dom";
import Home from "./Homepage.tsx";
import { createMemoryHistory, MemoryHistory } from "history";

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
   const history: MemoryHistory = createMemoryHistory({ initialEntries: ['/']});
    render(
      <MemoryRouter history = {history}>
        <Routes> 
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
  
  const user = userEvent.setup();
  const roverlink = screen.getByRole('link', {name: /CURIOSITY/i})
  user.click(roverlink);

  expect(roverlink.getAttribute('href')).toBe("/rover/curiosity");

});
});












     
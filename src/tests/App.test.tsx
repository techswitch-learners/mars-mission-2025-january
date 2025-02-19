import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", async () => {
  render(<App />);
  expect(await screen.findByText("Home")).toBeVisible();
});

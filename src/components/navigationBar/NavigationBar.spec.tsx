import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavigationBar from "./NavigationBar.tsx";
import React from "react";

describe("Desktop tests", () => {
  it("After rendering navigation bar - the navigation links should be displayed", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect(await screen.findByText("Home")).toBeVisible();
    expect(await screen.findByText("Perseverance")).toBeVisible();
    expect(await screen.findByText("Curiousity")).toBeVisible();
    expect(await screen.findByText("Spirit")).toBeVisible();
    expect(await screen.findByText("Opportunity")).toBeVisible();
  });

  it("After rendering navigation bar - the Home link takes to the Home page", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect((await screen.findByText("Home")).getAttribute("href")).toBe(
      "/home",
    );
  });

  it("After rendering navigation bar - the Perseverance link takes to the Perseverance page", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect((await screen.findByText("Perseverance")).getAttribute("href")).toBe(
      "/rover/perseverance",
    );
  });

  it("After rendering navigation bar - the Spirit link takes to the Spirit page", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect((await screen.findByText("Spirit")).getAttribute("href")).toBe(
      "/rover/spirit",
    );
  });

  it("After rendering navigation bar - the Curiosity link takes to the Curiosity page", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect((await screen.findByText("Curiousity")).getAttribute("href")).toBe(
      "/rover/curiousity",
    );
  });

  it("After rendering navigation bar - the Opportunity link takes to the Opportunity page", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect((await screen.findByText("Opportunity")).getAttribute("href")).toBe(
      "/rover/opportunity",
    );
  });
});

describe("Mobile tests", () => {
  beforeEach(() => {
    global.innerWidth = 375;
    global.innerHeight = 667;
    global.dispatchEvent(new Event("resize"));

    Object.defineProperty(window, "navigator", {
      value: {
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1",
      },
    });

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes("max-width: 760px"),
      media: query,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });

  it("After rendering navigation bar on mobile - the side nav hamburger button should be displayed", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect(
      document.getElementsByClassName("hamburger-open-button")[0],
    ).toBeVisible();
  });

  it("After rendering navigation bar on mobile and clicking on the hamburger button should open the side nav", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect(
      document.getElementsByClassName("hamburger-open-button")[0],
    ).toBeVisible();
    fireEvent.click(
      document.getElementsByClassName("hamburger-open-button")[0],
    );
    expect(await screen.findByText("Home")).toBeVisible();
  });

  it("After rendering navigation bar on mobile and clicking on the close button should close the side nav", async () => {
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>,
    );
    expect(
      document.getElementsByClassName("hamburger-open-button")[0],
    ).toBeVisible();
    fireEvent.click(
      document.getElementsByClassName("hamburger-open-button")[0],
    );
    expect(await screen.findByText("Home")).toBeVisible();
    fireEvent.click(
      document.getElementsByClassName("hamburger-close-button")[0],
    );
  });
});

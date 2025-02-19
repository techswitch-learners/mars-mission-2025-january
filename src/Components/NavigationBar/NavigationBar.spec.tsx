import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavigationBar from "./NavigationBar.tsx";
import React from 'react';

describe('NavigationBar Links', () => {
    test('After rendering navigation bar - the navigation links should be displayed', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        expect(await screen.findByText("Home")).toBeVisible;
        expect(await screen.findByText("Perseverance")).toBeVisible;
        expect(await screen.findByText("Curiousity")).toBeVisible;
        expect(await screen.findByText("Spirit")).toBeVisible;
        expect(await screen.findByText("Opportunity")).toBeVisible;
    });

    test('After rendering navigation bar - the Home link takes to the Home page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Home")));
        expect(await screen.findByText("Mars Rover Explorer")).toBeInTheDocument();
    });

    test('After rendering navigation bar - the Perseverance link takes to the Perseverance page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Perseverance")));
        expect(await screen.findByText("Welcome to perseverance rover page")).toBeInTheDocument();
    });

    test('After rendering navigation bar - the Spirit link takes to the Spirit page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Spirit")));
        expect(await screen.findByText("Welcome to spirit rover page")).toBeInTheDocument();
    });

    test('After rendering navigation bar - the Curiosity link takes to the Curiosity page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Curiosity")));
        expect(await screen.findByText("Welcome to curiosity rover page")).toBeInTheDocument();
    });

    test('After rendering navigation bar - the Opportunity link takes to the Opportunity page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Opportunity")));
        expect(await screen.findByText("Welcome to opportunity rover page")).toBeInTheDocument();
    });

    // test('After rendering navigation bar on mobile - the side nav hamburger button should be displayed', async () => {
    //     jest.spyOn(window.screen, "width", "get").mockReturnValue(500);    
    //     Object.defineProperty(window, 'innerWidth', {
    //         writable: true,
    //         configurable: true,
    //         value: 500,
    //       });

    //      window.innerWidth = 500;
    //      fireEvent(window, new Event('resize'));

    //     global.innerWidth = 400;
    //     global.dispatchEvent(new Event('resize'));

    //     render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
    //     window.dispatchEvent(new Event('resize'));
        
    //     expect(document.getElementsByClassName("hamburger-open-button")[0]).toBeVisible();
    // });
});

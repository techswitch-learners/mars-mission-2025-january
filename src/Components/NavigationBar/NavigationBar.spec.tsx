import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import ReactDOM from 'react-dom';
import NavigationBar from "./NavigationBar.tsx";
import React, { act } from 'react';
import { createMemoryHistory } from 'history';

describe('Desktop tests', () => {
    
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
        expect((await screen.findByText("Home")).getAttribute("href")).toContain('/home');
    });

    test('After rendering navigation bar - the Perseverance link takes to the Perseverance page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Perseverance")));
        expect((await screen.findByText("Perseverance")).getAttribute("href")).toContain('/perseverance');
    });

    test('After rendering navigation bar - the Spirit link takes to the Spirit page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Spirit")));
        expect((await screen.findByText("Spirit")).getAttribute("href")).toContain('/spirit');
    });

    test('After rendering navigation bar - the Curiosity link takes to the Curiosity page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Curiousity")));
        expect((await screen.findByText("Curiousity")).getAttribute("href")).toContain('/curiousity');
    });

    test('After rendering navigation bar - the Opportunity link takes to the Opportunity page', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        fireEvent.click((await screen.findByText("Opportunity")));  
        expect((await screen.findByText("Opportunity")).getAttribute("href")).toContain('/opportunity');
    });
   
});


describe('Mobile tests', () => {

    beforeEach(() => {
        global.innerWidth = 375; 
        global.innerHeight = 667;
        global.dispatchEvent(new Event('resize')); 
    
        Object.defineProperty(window, 'navigator', {
          value: {
            userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Version/12.0 Mobile/15A372 Safari/604.1',
          },
        });

        window.matchMedia = jest.fn().mockImplementation(query => ({
            matches: query.includes('max-width: 760px'), 
            media: query,
            addListener: jest.fn(),
            removeListener: jest.fn(),
          }));
    });

    test('After rendering navigation bar on mobile - the side nav hamburger button should be displayed', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        expect(document.getElementsByClassName("hamburger-open-button")[0]).toBeVisible();
        expect(await screen.findByText("Home")).not.toBeVisible;

    });

    test('After rendering navigation bar on mobile and clicking on the hamburger button should open the side nav', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        expect(document.getElementsByClassName("hamburger-open-button")[0]).toBeVisible();
        fireEvent.click(document.getElementsByClassName("hamburger-open-button")[0]);
        expect(await screen.findByText("Home")).toBeVisible;

    });

    test('After rendering navigation bar on mobile and clicking on the close button should close the side nav', async () => {
        render(<MemoryRouter> <NavigationBar /></MemoryRouter>);
        expect(document.getElementsByClassName("hamburger-open-button")[0]).toBeVisible();
        fireEvent.click(document.getElementsByClassName("hamburger-open-button")[0]);
        expect(await screen.findByText("Home")).toBeVisible;
        fireEvent.click(document.getElementsByClassName("hamburger-close-button")[0]);
        expect(await screen.findByText("Home")).not.toBeVisible;

    });
   
});

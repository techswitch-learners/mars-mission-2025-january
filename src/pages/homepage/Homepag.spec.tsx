import React from 'react';
import {render,screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Homepage';
import { MemoryRouter} from 'react-router-dom';

describe('Home Component',()=>{
it('renders the homepage correctly', async() => {
    render(
        <MemoryRouter >
         <Home/>
        </MemoryRouter>
      );

      expect(await screen.findByText("Mars Rover Explorer")).toBeInTheDocument();
});

it('should navigate to rover page when a rover is clicked',async () =>{
    render(
        <MemoryRouter>
        <Home/>
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText("curiosity"));
    expect(await screen.findByText("Welcome to curiosity rover page")).toBeInTheDocument();
});


});

// write tests as we go
import React from "react";
import "@testing-library/jest-dom";
import { getByAltText, render, screen } from "@testing-library/react";
import { MarsRoverPhotoResponse, MarsRoverPhotoViewer } from "./MarsRoverPhotoViewer";
import "./MarsRoverPhotoViewer.scss"

// checks the api call
// checks json data is mapped correctly - use a mock function?
// checks photos display on screen - also use mock functiion?

const mockPhotoResponse: MarsRoverPhotoResponse = {
    photos: [
        {
            id: 960932,
            sol: 0,
            camera: {
                name: "MAST",
                full_name: "Mast Camera"
            },
            img_src: "",
            earth_date: "",
            rover: {
                name: "Curiosity"
            }
        }
    ]
};

describe('MarsRoverPhotoViewer', () => {
    const mockJson = jest.fn();
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: mockJson
        });
    })

    it('Display photos', async () => {
        mockJson.mockResolvedValue(mockPhotoResponse);
        render(<MarsRoverPhotoViewer />);
        const image = await screen.findByAltText("Curiosity, MAST, 960932");
        expect(image).toBeVisible();
    });

    // finish test below once api builder has been written
    // it('Calls the right API', async () => {
    //     render(<MarsRoverPhotoViewer earthDate={'123'} rover={'isadf'} />);
    //     expect(global.fetch).toHaveBeenCalledWith("https://https://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=2022-04-19&camera=mast")
    // });
});

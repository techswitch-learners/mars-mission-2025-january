import { useEffect, useState } from 'react';
import React from 'react';

type MarsRoverPhotoResponse = {
photos: Photo[],
};

type Photo = { 
    id: number,
    sol: number,
    camera: Camera,
    img_src: string,
    earth_date: string,
    rover: Rover
}

type Camera = {
    name: string,
    full_name: string,
}

type Rover = {
    name: string
}

export const MarsRoverPhotoViewer = () => {
    const [roverThumbnails, setRoverThumbnails] = useState<MarsRoverPhotoResponse>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=2022-04-19&camera=fhaz")
        .then(response => response.json())
        .then(result => setRoverThumbnails(result))
        .catch(err => setError(err.message));
    }, []);

    if (error) { 
        return (<div>Error?</div>)
    }

    if (!roverThumbnails) {
        // to do: add suggestions for another sol/date/camera/rover
        return (<div>Unable to find images</div>)
    }

    else {
        console.log(roverThumbnails)
        return(
            <div>
                <h1>Temp gallery of rover images</h1>
                <ul>
                    {roverThumbnails.photos.map(photo =>
                        <li key={photo.id}>
                            <img src={photo.img_src} alt={`${photo.rover.name}, ${photo.camera.name}, ${photo.id}`}/>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

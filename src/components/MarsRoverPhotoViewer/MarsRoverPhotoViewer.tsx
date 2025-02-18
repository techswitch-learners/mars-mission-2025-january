import { useEffect, useState } from 'react';
import React from 'react';

// within same function add sol, date, rover, camera as parameters of the function
//http://mars-photos.herokuapp.com/api/v1/rovers/<ROVER NAME>Curiosity/photos?earth_date=<SET DATE>2025-02-17&camera=<CAMERA NAME>fhaz

// get the the image sources from json

type MarsRoverPhotoResponse = {
photos: photos[],
};

type photos = [
    id: number,
    sol: number,
    camera: Array<camera>,
    img_src: string,
    earth_date: string,
]

type camera = {
    name: string,
    full_name: string,
}

// create function to call api 
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

            {roverThumbnails}
               
            </ul>
            </div>

        )
        
        
    }


}

// {roverThumbnails.photos.map(({id, img_src}: photos, index: number) => {
//     return (<li key={`roverThumbnails-${index}`}>
//         <img src= {img_src}/>
//     </li>
//     )
// }

// )}

// {userlist.map(({name, id}: UserModel, index: number) => {
//     return (<li key={`userlist-${index}`} onClick= {() => handleUserClick(id)}>
//         <Link to="/userdetails">
//             {name}
//         </Link>
//     </li>)
// })}

// export default MarsRoverPhotoViewer;

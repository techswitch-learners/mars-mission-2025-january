import React from "react";
import { useEffect, useState } from "react";

interface ManifestModel {
    photo_manifest: {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    photos: Photo[];
    }
}

interface Photo {
    sol: number;
    earth_date: string;
    total_photos: 3702;
    cameras: [];
}

export const MarsRoverImageSearchHeader = () => {
    const roverName: string = "curiosity";

    const [manifestData, setManifestData] = useState<ManifestModel|null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${roverName}?api_key=DEMO_KEY`)
        .then(response => response.json())
        .then(data => setManifestData(data))
        .catch(error => {
            setError(true);
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [])

    console.log(manifestData);

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    return (
        <div>
            <h1>{manifestData?.photo_manifest?.name ?? ''}</h1>
            <p>Placeholder image</p>

        </div>
    )
}

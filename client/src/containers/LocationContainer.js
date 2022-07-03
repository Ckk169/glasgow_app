import React, { useEffect, useState } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeafletMap from '../components/LeafletMap';
import LocationService from '../services/LocationService';
import '../App.css';


const LocationContainer = () => {


    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        LocationService.getLocations()
            .then(locations => setLocations(locations))

    }, [])



    const showLocation = (locationId) => {

        LocationService.showLocation(locationId)
            .then(location => setSelectedLocation(location))

    }


    return (
        <>

            <LeafletMap locations={locations} showLocation={showLocation} />
            {selectedLocation ? <LocationDetail location={selectedLocation} /> : null}

        </>

    )

}

export default LocationContainer;
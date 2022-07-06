import React, { useEffect, useState } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeafletMap from '../components/LeafletMap';
import LocationService from '../services/LocationService';
import '../css/LocationDetail.css'

const LocationContainer = ({ locations }) => {

    const [selectedLocation, setSelectedLocation] = useState(null);

    const showLocation = (locationId) => {
        LocationService.showSelectedLocation(locationId)
            .then(location => setSelectedLocation(location))

    };

    // classname added to match LocationDetails
    return (
        <div className="location-container">

            <LeafletMap locations={locations} showLocation={showLocation} />
            {selectedLocation ? <LocationDetail location={selectedLocation} /> : null}

        </div >

    )
};

export default LocationContainer;
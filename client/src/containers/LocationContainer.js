import React, {useState } from 'react';
import LocationDetail from '../components/LocationDetail';
import LeafletMap from '../components/LeafletMap';
import LocationService from '../services/LocationService';
import '../css/LocationContainer.css';


const LocationContainer = ({locations}) => {


const [selectedLocation, setSelectedLocation] = useState(null);
console.log(locations)


    const showLocation = (locationId) => {
    LocationService.showSelectedLocation(locationId)
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
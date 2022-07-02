import {useState} from 'react';
import LocationDetail from '../components/LocationDetail';

const LocationContainer = () => {

    const [locations, setLocations] = useState([
        {
            name: "Rotunda",
            gps: {
                lat: 55.8636,
                long: 4.2825
            },
            info: "Some amazing text goes here"
        },
        {
            name: "Grahamston",
            gps: {
                lat: 55.8591,
                long: 4.2581
            },
            info: "Some crap text goes here"
        },
    ]);

    const [selectedLocation, setSelectedLocation] = useState(null);


    //this is to be passed to the map component
    const handleSelectLocation = (location) => {

        setSelectedLocation(location)
      
    };



    return(
        <>
            {selectedLocation ? <LocationDetail location = {selectedLocation}/> : null }
        </>
    )
  
}

export default LocationContainer;
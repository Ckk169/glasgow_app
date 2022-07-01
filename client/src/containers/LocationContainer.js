import {useState} from 'react';
import LocationDetail from '../components/LocationDetail';

const LocationContainer = () => {

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({name: "glasgow"});


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
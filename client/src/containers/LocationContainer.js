import React, { useEffect, useState } from 'react';
import LocationDetail from '../components/LocationDetail';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../App.css';
import LocationList from '../components/LocationList';


const LocationContainer = () => {

    const [locations, setLocations] = useState([
        {
            name: "Rotunda",
            gps: {
                lat: 55.8636,
                long: -4.257140
            },
            info: "Some amazing text goes here"
        },
        {
            name: "Grahamston",
            gps: {
                lat: 55.8591,
                long: -4.2581
            },
            info: "Some crap text goes here"
        },
    ]);


  

    const [selectedLocation, setSelectedLocation] = useState(null);


    //this is to be passed to the map component

    const handleSelectLocation = (event) => {
        const chosenIndex = event.target.value;
        const chosenLocation = locations[chosenIndex];


        setSelectedLocation(chosenLocation)

    };



    return (
        <>


        <div id='Map' style={{ height: '50%', width: '50%' }}>

        <MapContainer locations={locations}
         id="Map"
        center={[55.8642, -4.2518]}
        zoom={12}
        scrollWheelZoom={true}>

        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location, index) => {

            return(
                <Marker location={location} key={index} handleSelectLocation={handleSelectLocation}
                position={[location.gps.lat, location.gps.long]}>
                <Popup location={location} index={index}>
                {location.name}
                <button onClick= {handleSelectLocation} value={index}>More Info</button>
                </Popup>
            

        </Marker>

         )})};


    
   
    </MapContainer>
    </div>
            {selectedLocation ? <LocationDetail location={selectedLocation} /> : null}
    
    </>
    

    )

}

export default LocationContainer;
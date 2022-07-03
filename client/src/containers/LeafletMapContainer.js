import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import '../App.css';



const LeafletMapContainer = ({locations, showLocation }) => {

    const handleButtonClick = (event) => {

        showLocation(event.target.value)
      
    }

    return (
      
       <div id='Map' style={{ height: '50%', width: '50%' }}>

            <MapContainer
                locations ={locations}
                showLocation ={showLocation}
                id="Map"
                center={[55.8642, -4.2518]}
                zoom={12}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location)=>{

                    return(
                        <Marker 
                         position={[location.gps.lat, location.gps.long]} key={location._id}>
    
                        <Popup location={location}>
                        <button onClick={handleButtonClick} value={location._id}>{location.name}</button>
                        </Popup>
                         
                        </Marker>

                    )

                })}
               
            </MapContainer>





    )
}
export default LeafletMapContainer;


       
import React from 'react';

import Header from './Header';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../css/LocationDetail.css'
import L from 'leaflet';

const LeafletMap = ({ locations, showLocation }) => {

    const handleButtonClick = (event) => {
        showLocation(event.target.value)
    };

    // This is NEW https://www.youtube.com/watch?v=UNSYoW3gkDc
    const markerIcon = new L.Icon({
        iconUrl: require("../cone_marker.png"),
        // was 35,45 below
        iconSize: [55, 65],
    });

    return (
        <>
            <div className='map'>
                <MapContainer
                    locations={locations}
                    showLocation={showLocation}
                    id="Map"
                    center={[55.866223, -4.271495]}
                    zoom={13}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations.map((location) => {

                        // icon ={markerIcon} is NEW
                        return (
                            <Marker
                                position={[location.gps.lat, location.gps.long]} key={location._id} icon={markerIcon} >

                                <Popup location={location}>
                                    <button onClick={handleButtonClick} value={location._id}>{location.name}</button>
                                </Popup>
                            </Marker>
                        )
                    })}
                </MapContainer>
            </div>
        </>
    )
};
export default LeafletMap;
import React from 'react';
import LocationContainer from './LocationContainer';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, setPosition } from 'react-leaflet'
import '../App.css';




const LeafletMapContainer = ({locations}) => {

    const handleButton = (event) => {
        const chosenIndex = event.target.value;
        const chosenLocation = locations[chosenIndex]
        handleButtonSelect(chosenLocation)
    }

    

    // # to revisit 
    // const LocationMarker = () => {
    //     const [position, setPosition] = useState(null)
    //     const map = useMapEvents({
    //         click() {
    //             map.locate()
    //         },
    //         locationfound(e) {
    //             setPosition(e.latlng)
    //             map.flyTo(e.latlng, map.getZoom())
    //         },
    //     })

    //     return position === null ? null : (
    //         <Marker position={position}>
    //             <Popup>You are here</Popup>
    //         </Marker>
    //     )
    // }

    return (


            <MapContainer
            key = {index}
            value = {index}
                id="Map"
                center={[55.8642, -4.2518]}
                zoom={12}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker
                    position={[55.8636, -4.2825]}>
                    <Popup >
                    // to link with dummy data
                        <button onClick={handleButton}>Rotunda</button>
                    </Popup>
                </Marker>

                <Marker
                    position={[55.8591, - 4.2581]}>
                    <Popup>
                        // to link with dummy data
                        <button onClick={handleButton}>Grahamston</button>
                    </Popup>
                </Marker>





            </MapContainer>


    )
}

export default LeafletMapContainer;
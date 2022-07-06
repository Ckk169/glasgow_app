import React, { useState } from "react";
import '../css/LocationDetail.css'

const LocationDetail = ({ location }) => {

    return (
        <div className="location-container">
            <div className="location-detail">

                <div id="cf">
                    <img className="bottom" src={location.photo.past} />
                    <img className="top" src={location.photo.present} />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3>{location.name}</h3>
                <h4>{location.title.locationDetail}</h4>
                <p> {location.info}</p>

            </div >
        </div>
    )
};
export default LocationDetail;
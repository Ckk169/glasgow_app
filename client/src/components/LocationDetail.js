import React from "react";


const LocationDetail = ({ location }) => {



    return (
        //Need to apply appropriate tag and id here -SD
        <>

            <h3>{location.name}</h3>
            <h4>{location.title.locationDetail}</h4>
            <p> {location.info}</p>
            <img src={location.photo.past} />
        </>
    )
}
export default LocationDetail;
import React from "react";


const LocationDetail = ({ location }) => {



    return (
        //Need to apply appropriate tag and id here -SD
        <>

            <h3>The selected location is: {location.name}</h3>
            <h4> Some info about the location: {location.info}</h4>
        </>
    )
}
export default LocationDetail;
import React from 'react';
import LocationContainer from './LocationContainer';

import '../App.css';



const LeafletMapContainer = ({locations, handleSelectLocation }) => {

    const handleButton = (event) => {
        handleSelectLocation(event.target.value)
    }


    return (

      

       

    )
}

export default LeafletMapContainer;
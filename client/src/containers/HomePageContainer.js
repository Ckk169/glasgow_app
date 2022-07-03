import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocationContainer from './LocationContainer';


const HomePageContainer = () => {




    return (
        //will be adding 3 component buttons to link with Map, Quiz ,Funfact
        //or use useNavigate (Still to figure!)
        
        <>

            <h1>Home Page</h1>
            <LocationContainer/>

        </>
    )

}

export default HomePageContainer;

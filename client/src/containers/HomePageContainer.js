import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocationContainer from './LocationContainer';
import QuizContainer from './QuizContainer';


const HomePageContainer = () => {


    let navMap = useNavigate();
    function handleMapClick() {
        navMap('./map');
    }

    let navQuiz = useNavigate();
    function handleQuizClick() {
        navQuiz('./quiz');
    }



    return (
        //will be adding 3 buttons(or our own icon) to link with Map, Quiz ,Funfact
        //or use useNavigate (Still to figure!)
        // homepage linked to map page now by using useNavigate().
        // button will be changed to a img.Can revisit when css the FUCK out of this later.
        <>

            <button onClick={handleMapClick}>Map</button>
            <button onClick={handleQuizClick}>Quiz</button>

        </>
    )

}

export default HomePageContainer;

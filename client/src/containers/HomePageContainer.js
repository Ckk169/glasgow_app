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
        <>

            <button onClick={handleMapClick}>Map</button>
            <button onClick={handleQuizClick}>Quiz</button>

        </>
    )

}

export default HomePageContainer;

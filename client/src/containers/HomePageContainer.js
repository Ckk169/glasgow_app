import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/HomePageContainer.css"
import Header from '../components/Header';


//1, find an icon for map and quiz from google chrome
//2, import to assets/image
//3, change on jsx
//4, css


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
                <Header />

            <div className='button-container'>

                <div className='map-button'>
                    {/* <img className='map-icon' src={map} alt='glasgow-map' onClick={handleMapClick}/> */}
                    <button onClick={handleMapClick}>Map</button> 
                </div>

                <div className='quiz-button'>
                    <button onClick={handleQuizClick}>Quiz</button>
                </div>

                {/* <div className='bbc-button'>
                    <button onClick={handleQuizClick}>Bbc Learning</button>
                </div> */}
            </div>
        </>
    )

}

export default HomePageContainer;

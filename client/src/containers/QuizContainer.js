import { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestions";


const QuizContainer = () => {

    const [questions, setQuestions] = useState([
        {question: "who's the daddy?",
        answers: [
            {option: "Ken",
            value: "true"},

            {option: "Simona",
            value: "false"},

            {option: "Chris",
            value: "false"},

            {option: "Bob",
            value: "false"}
        
        
        ]},

        {question: "Who's got the best app?",
        answers: [
            {option: "Team Optimism",
            value: "false"},

            {option: "Team Patience",
            value: "true"},

            {option: "Team Confidence",
            value: "false"},

            {option: "Team Inspiration",
            value: "false"}
        
        
        ]}
    ])

    const [showScore, setShowScore] =useState(false)

    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0)


//this handles the next question button change
    const handleNextButtonClick = (question) => { 

        if (question < questions.length){
        SetCurrentQuestion(question)
        } else {
            setShowScore(true)
        }
      
    }

    //this handles selecting an answer and updating the users' score

    const updateScore = (answer) => {

        if (answer == true){
            setScore(score + 1)
        } 
        
      
    }
    
    console.log("i am the score:", score)


    return(
        <>
        {showScore ? (<h1> You scored {score} out of {questions.length}</h1>):
        <QuizQuestion currentQuestion={currentQuestion} questions={questions} handleNextButtonClick= {handleNextButtonClick} updateScore={updateScore}/>}

        </>

    )
  
}
export default QuizContainer;
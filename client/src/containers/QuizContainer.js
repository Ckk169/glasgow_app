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

    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const handleNextButtonClick = (question) => {
    
    
        SetCurrentQuestion(question)
      
    }

    return(

        <QuizQuestion currentQuestion={currentQuestion} questions={questions} handleNextButtonClick= {handleNextButtonClick}/>



    )
  
}
export default QuizContainer;
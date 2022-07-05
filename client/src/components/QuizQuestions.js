import { useState } from "react"
import QuizAnswer from "./QuizAnswers"
import '../css/QuizQuestion.css'




const QuizQuestion = ({ currentQuestion, questions, handleNextButtonClick, handleUpdateScore }) => {

    const [clicked, setClicked] = useState(false)

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)
        setClicked(false)
    }
    
    const handleSelect =(option) => {
        setClicked(option)
      
    }
    
    return (
        <>
            <aside>Question {questions[currentQuestion].number}/{questions.length}</aside>

            <h3>{questions[currentQuestion].question}</h3>
            <QuizAnswer key={questions[currentQuestion]} answers={questions[currentQuestion].answers} handleUpdateScore={handleUpdateScore} handleSelect={handleSelect} clicked={clicked} />
            <button onClick={onButtonClick} value={questions[currentQuestion].number}>Next Question</button>


        </>
    )

}
export default QuizQuestion;


//you have a key issue to debug and figure out where it is coming from.
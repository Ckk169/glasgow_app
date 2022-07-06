import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestions";
import '../css/QuizContainer.css'



const QuizContainer = ({ questions }) => {

    const [startGame, setStartGame] = useState(false)

    const [showScore, setShowScore] = useState(false)

    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0)
    



    //this handles the next question button change
    const handleNextButtonClick = (question) => {

        if (question < questions.length) {
            SetCurrentQuestion(question)
        } else {
            setShowScore(true)
        }

    }

    //this updates the running score of the quiz to be rendered at the end

    const handleUpdateScore = (answer) => {

        if (answer === "true") {

            setScore(score + 1)
        }



    }

    const handleStartGame = () => {
        setStartGame(true)
      
    }



    return (
        <>
            <div className="quiz-container">
                <div className="question-section">
                {startGame ? null: <button className="start" onClick={handleStartGame}>Start Quiz</button>}
                {startGame ? 
                <>
                {showScore ? (<h1 className="score"> You scored {score} out of {questions.length}</h1>) :
                    <QuizQuestion currentQuestion={currentQuestion}
                        questions={questions}
                        handleNextButtonClick={handleNextButtonClick}
                        handleUpdateScore={handleUpdateScore} />}
                </> : null
                }
                </div>
            </div>
        </>

    )

}
export default QuizContainer;
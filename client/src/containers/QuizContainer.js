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

    //this handles pressing the start button
    const handleStartGame = () => {
        setStartGame(true)
      
    }


    return (
        <>
            <div className="quiz-container">
                <div className="question-section">
                {/* this line shows the start button for the game if startGame is set to false */}
                {startGame ? null: <button className="start" onClick={handleStartGame}>Start Quiz</button>}

                {/* the following will render the quiz questions if startGame is set to true*/}
                {startGame ? 
                <>
                    {/* this will only show the score page if the question index value is less than the quiz length */}
                    {showScore ? (
                                    <>
                                    <h1 className="score"> {(score > 3) ? "Nae bad!": "Pure mince!"}</h1>
                                    <h1 className="score">You scored {score}/ {questions.length}</h1>
                                    </>
                                )

                                :

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
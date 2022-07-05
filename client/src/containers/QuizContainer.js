import { useState } from "react";
import QuizQuestion from "../components/QuizQuestions";



const QuizContainer = ({ questions }) => {

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

    console.log('Im the current question', currentQuestion)

    return (
        <>
            <div className="score-section">
                {showScore ? (<h1> You scored {score} out of {questions.length}</h1>) :
                    <QuizQuestion currentQuestion={currentQuestion}
                        questions={questions}
                        handleNextButtonClick={handleNextButtonClick}
                        handleUpdateScore={handleUpdateScore} />}
            </div>
        </>

    )

}
export default QuizContainer;
import { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestions";
import QuizService from '../services/QuizService';


const QuizContainer = () => {

    const [showScore, setShowScore] = useState(false)

    const [currentQuestion, SetCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0)

    const [questions, setQuestions] = useState([]);


    // deleted dummy data , now adding in useEffect to seed with db.
    useEffect(() => {
        QuizService.getQuestions()
            .then(questions => setQuestions(questions))
    }, [])

    const showSelectedQuestion = (questionId) => {
        QuizService.showSelectedQuestion(questionId)
            .then(question => setQuestions(question))
    }

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

    return (
        <>

            {showScore ? (<h1> You scored {score} out of {questions.length}</h1>) :
                <QuizQuestion currentQuestion={currentQuestion}
                    questions={questions}
                    handleNextButtonClick={handleNextButtonClick}
                    handleUpdateScore={handleUpdateScore} />}

        </>

    )

}
export default QuizContainer;
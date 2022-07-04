import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({ currentQuestion, questions, handleNextButtonClick, handleUpdateScore }) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)


    }



    return (
        <div>
            <span>Question {questions[currentQuestion].number}/{questions.length}</span>

            <h3>{questions[currentQuestion].question}</h3>
            <QuizAnswer key={questions[currentQuestion]} answers={questions[currentQuestion].answers} handleUpdateScore={handleUpdateScore} />
            <button onClick={onButtonClick} value={currentQuestion + 1}>Next Question</button>




        </div>
    )

}
export default QuizQuestion;
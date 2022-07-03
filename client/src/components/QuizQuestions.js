import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({currentQuestion, questions, handleNextButtonClick}) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)
        console.log(event.target.value)
      
    }

    

    return (
        <div>
             <span>Question {currentQuestion}/{questions.length}</span>
             {console.log(currentQuestion)}
             <h3>{questions[currentQuestion].question}</h3>
             <QuizAnswer answers={questions[currentQuestion].answers} />
             <button onClick={onButtonClick} value={currentQuestion + 1}>Next Question</button>

             
            
            
        </div>
    )
  
}
export default QuizQuestion;
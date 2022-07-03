import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({currentQuestion, questions, handleNextButtonClick, updateScore}) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)
        
      
    }

    

    return (
        <div>
             <span>Question {currentQuestion}/{questions.length}</span>
             
             <h3>{questions[currentQuestion].question}</h3>
             <QuizAnswer answers={questions[currentQuestion].answers} updateScore={updateScore} />
             <button onClick={onButtonClick} value={currentQuestion +1}>Next Question</button>

             
            
            
        </div>
    )
  
}
export default QuizQuestion;
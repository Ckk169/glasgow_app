import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({currentQuestion, questions, handleNextButtonClick, handleUpdateScore}) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)
        
      
    }

    const thisQuestion = currentQuestion;

    let nextQuestion = thisQuestion + 1;
    

    

    return (
        <div>
             <span>Question {nextQuestion}/{questions.length}</span>
             
             <h3>{questions[currentQuestion].question}</h3>
             <QuizAnswer key={questions[currentQuestion]} answers={questions[currentQuestion].answers} handleUpdateScore={handleUpdateScore} />
             <button onClick={onButtonClick} value={nextQuestion}>Next Question</button>

             
            
            
        </div>
    )
  
}
export default QuizQuestion;
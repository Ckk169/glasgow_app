import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({currentQuestion, questions, handleNextButtonClick, handleUpdateScore}) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)
        
      
    }

    // const thisQuestion = currentQuestion;

    // let nextQuestion = thisQuestion + 1;
    

    console.log(currentQuestion.number)

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
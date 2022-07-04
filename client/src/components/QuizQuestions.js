import QuizAnswer from "./QuizAnswers"

const QuizQuestion = ({ currentQuestion, questions, handleNextButtonClick, handleUpdateScore }) => {

    const onButtonClick = (event) => {
        handleNextButtonClick(event.target.value)

        //remember to delete this line later after chatting to instructors -SD
        console.log( "what number is being passed here", event.target.value)
    }
    

    
    return (
        <div>
            <span>Question {questions[currentQuestion].number}/{questions.length}</span>

            <h3>{questions[currentQuestion].question}</h3>
            <QuizAnswer key={questions[currentQuestion]} answers={questions[currentQuestion].answers} handleUpdateScore={handleUpdateScore} />
            <button onClick={onButtonClick} value={questions[currentQuestion].number}>Next Question</button>

{/* Was trying to make value on button to:
 currentQuestion + 1 but this was giving me issues with state.
currentQuestion would go from 1 to 11.
Still to understand why so cheated and used our number property instead  as logic is the same*/}




        </div>
    )

}
export default QuizQuestion;


//you have a key issue to debug and figure out where it is coming from.
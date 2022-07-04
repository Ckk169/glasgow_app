
const QuizAnswer = ({answers, handleUpdateScore}) => {

    const onAnswerClick = (event) => {
        handleUpdateScore(event.target.value)
    
       
      
    }

    const answerNodes = answers.map((answer, index) => {

    
        return(
            <>
                <button onClick={onAnswerClick} key={index} value ={answer.value}>{answer.option}</button>
               
            </>
        )

      
    })

    return(
        <div>
            {answerNodes}
        </div>
    )
  
}
export default QuizAnswer;
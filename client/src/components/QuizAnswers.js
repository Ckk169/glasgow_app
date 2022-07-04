
const QuizAnswer = ({answers, handleUpdateScore}) => {

    const onAnswerClick = (event) => {
        handleUpdateScore(event.target.value)
        console.log('I am the answer value', event.target)
       
      
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
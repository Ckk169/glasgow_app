
const QuizAnswer = ({answers, handleUpdateScore}) => {

    const onAnswerClick = (value) => {
        handleUpdateScore(value)
       
      
    }

    const answerNodes = answers.map((answer, index) => {

    
        return(
            <>
                <button onClick={()=>onAnswerClick(answer.value)} key={index} value ={answer.value}>{answer.option}</button>
               
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

const QuizAnswer = ({answers}) => {

    const answerNodes = answers.map((answer, index) => {
        return(
            <>
                <button value ={index}>{answer.option}</button>
               
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
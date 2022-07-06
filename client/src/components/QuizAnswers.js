import '../css/QuizAnswer.css'


const QuizAnswer = ({ answers, handleUpdateScore, handleSelect, clicked}) => {


    

    const onAnswerClick = (event) => {
        if (event.target.value === "true"){
        
            handleUpdateScore(event.target.value)
          
            handleSelect(true)
        

    
        }else{
            handleSelect(true)
   
        }

    }



    const answerNodes = answers.map((answer, index) => {


        return(

            <>
            {clicked ? 
            <button className="answer-button" style={{backgroundColor: (answer.value === "true") ? "green":"red" }} onClick={onAnswerClick} key={index} value={answer.value}>{answer.option}</button>:
            <button className="answer-button" onClick={onAnswerClick} key={index} value={answer.value}>{answer.option}</button>} 
            </>

        )




    })

    return (
        <div className='answers'>
            
                {answerNodes}
            
        </div>
    )

}
export default QuizAnswer;
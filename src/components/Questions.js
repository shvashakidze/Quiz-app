import React from 'react'

function Questions ({handleNextQuestion, showAnswers, answerHandle, data:{question, correct_answer, answers}}){
    return(
        <>
        
 <div className="questionClass">
      <h1 dangerouslySetInnerHTML={{__html:question}}/>
    </div>
    <div className="button-overall">
      {answers.map((answer, index)=> {
        const colorClassName = showAnswers ? (
          answer === correct_answer ? "green" : "red"

        ): " ";

        return(
          <button className={`normal-button ${colorClassName}`} 
          onClick ={()=> answerHandle(answer)}
            dangerouslySetInnerHTML={{__html:answer}}/>
        )
      })}
      </div>
      {showAnswers && (
        <button onClick ={handleNextQuestion }
        className="next-question">Next Question</button>
      )}
        </>
    )
}

export default Questions
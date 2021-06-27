import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Questions from './components/Questions';

const QUIZAPI_URL ="https://opentdb.com/api.php?amount=10&difficulty=hard";

const App = ()=> {
const [question, setQuestion] = useState([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [score, setScore] = useState(0);
const [showAnswers, setShowAnswers] = useState(false);

console.log(question)

useEffect(() =>{
  axios.get(QUIZAPI_URL)
      .then(res => res.data)
      .then(data =>{
        const questions = data.results.map((question)=>({
         ...question,
         
         
         answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random()-0.5)
        }))
        

        setQuestion(questions)
      })
},[])


const answerHandle = (answer) =>{
  if(!showAnswers){
  if(answer === question[currentIndex].correct_answer){
    setScore(score+1);
    }
  }
  setShowAnswers(true);
}

const handleNextQuestion = ()=>{
  setCurrentIndex(currentIndex+1);
  setShowAnswers(false);
}

  return ( question.length > 0 ? (
  <div className="container">
    {currentIndex >= question.length ? (
      <h1>Your Score is {score}</h1>
    ) : (<Questions 
      handleNextQuestion={handleNextQuestion}
      showAnswers={showAnswers}
      answerHandle={answerHandle} 
     data={question[currentIndex]}/>)}
  
 </div>
 ) : <div className="loader">Loading...</div>
    
  );
}

export default App;

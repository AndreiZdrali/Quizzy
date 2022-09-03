import './Quiz.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { shuffleArray } from '../../utils.js';
import Loading from '../Loading/Loading';
import Answer from '../Answer/Answer';
import Stats from '../Stats/Stats';

function Quiz() {
  const params = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const category = params.category[0].toUpperCase() +
    params.category.slice(1).toLowerCase();
  const answers = questions.map(q =>
    shuffleArray([q.correctAnswer, ...q.incorrectAnswers]));

  useEffect(() => {
    fetch(process.env.REACT_APP_API + 'question/quiz/' + params.category)
      .then(data => {
        if (data.ok)
          return data.json();
        throw new Error("Failed to fetch API");
      })
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
      setCorrect(correct => correct + 1);
    } else {
      setWrong(wrong => wrong + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(current => current + 1);
    } else {
      setFinished(true);
    }
  }

  return (
    loading ? <Loading /> : finished ? <Stats correct={correct} wrong={wrong}/> :
    <div className="quiz-container">
      <div className="quiz-top">
        <div className="quiz-category">{category}</div>
        <div className="quiz-stats">
          <div className="quiz-correct">{correct}</div>|
          <div className="quiz-wrong">{wrong}</div>
        </div>
      </div>
      <div className="quiz-title">{questions[currentQuestion].title}</div>
      <hr className="line"/>
      <div className="quiz-answers-list">
        {
          answers[currentQuestion].map(a => {
            return <Answer key={a} text={a} callback={checkAnswer}/>
          })
        }
      </div>
      <div className="quiz-progress">
        {currentQuestion} / {questions.length}
      </div>
    </div>
  )
}

export default Quiz;
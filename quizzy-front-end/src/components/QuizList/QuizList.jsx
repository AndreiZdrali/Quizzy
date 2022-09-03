import './QuizList.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import Loading from '../Loading/Loading';
import Retry from '../Retry/Retry';
import { useState, useEffect } from 'react';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(fetchQuizzes, []);

  function fetchQuizzes() {
    setFailed(false);
    fetch(process.env.REACT_APP_API + 'question/quiz')
    .then(data => {
      if (data.ok)
        return data.json();
      throw new Error("Failed to fetch API");
    })
    .then(data => {
      setQuizzes(data);
      setLoading(false);
      setFailed(false);
    })
    .catch(error => {
      console.log(error);
      setFailed(true);
    });
  }

  return (
    loading ? 
    <div className="waiting-container">
      { failed ? <Retry callback={fetchQuizzes} /> : <Loading />}
    </div> :
    <div className="quiz-list">
      {
        quizzes.map(quiz => {
          return <CategoryCard key={quiz.id} category={quiz.category} title={quiz.title} description={quiz.description} />
        })
      }
    </div>
  )
}

export default QuizList;
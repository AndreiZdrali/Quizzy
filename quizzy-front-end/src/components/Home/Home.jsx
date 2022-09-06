import './Home.css';
import { Routes, Route } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import QuizList from '../QuizList/QuizList';
import Quiz from '../Quiz/Quiz';

function Home() {

  const test = () => {
    AuthService.register("david", "parola");
  }

  return (
    <div className="home-container">
      <div className="text-content">
        <div className="home-title" onClick={test}>
          Quizzy
        </div>
        <div className="home-description">
          World's best trivia game! Choose your category and see how well you can do!
        </div>
      </div>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path=":category" element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default Home;
import './Stats.css';
import { useNavigate } from 'react-router-dom';

function Stats(props) {
  const navigate = useNavigate();

  return (
    <div className="stats-container">
      <div className="stats-title">
        Congrats! Your final score is:
      </div>
      <div className="stats-text">
        <div className="stats-correct">{props.correct}</div>|
        <div className="stats-wrong">{props.wrong}</div>
      </div>
      <div className="home-button" onClick={() => navigate('/play')}>Back to home</div>
    </div>
  );
}

export default Stats;
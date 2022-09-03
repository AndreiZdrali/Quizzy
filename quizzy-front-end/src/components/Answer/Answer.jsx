import './Answer.css';

function Answer(props) {

  return (
    <div className="answer-container" onClick={() => props.callback(props.text)}>
      <div className="answer-text">
        {props.text}
      </div>
    </div>
  )
}

export default Answer;
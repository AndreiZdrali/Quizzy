import './Retry.css';

function Retry(props) {

  return (
    <div>
      <div className="retry-text">Failed to fetch data</div>
      <div className="retry-button" onClick={props.callback}>Retry</div>
    </div>
  )
}

export default Retry;
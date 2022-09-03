import './CategoryCard.css';
import { useNavigate } from 'react-router-dom';

function CategoryCard(props) {
  const navigate = useNavigate();

  function onClick() {
    navigate(`/play/${props.category}`);
  }

  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-title">
        {props.title ?? "MISSING VALUE"}
      </div>
      <hr className="card-line"/>
      <div className="card-description">
        {props.description ?? "MISSING VALUE"}
      </div>
    </div>
  )
}

export default CategoryCard;

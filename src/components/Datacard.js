import './Datacard.css';

const Datacard = (props) => {
  return (
    <div className="card">
      <div className="card-head">
        <span>{props.title}</span>
      </div>
      <div className="card-body">
        <img className="card-body-pic" src={props.poster} alt="img"></img>
        <ul className="card-body-info">
          <li>Release Date: {props.date}</li>
          <li>Overview: {props.overview}</li>
        </ul>
      </div>
    </div>
  );
};

export default Datacard;

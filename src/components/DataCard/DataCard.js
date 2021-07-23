import React from 'react';
import Proptypes from 'prop-types';

const DataCard = ({ title, poster, date, overview }) => {
  return (
    <div className="card">
      <div className="card-head">
        <span>{title}</span>
      </div>
      <div className="card-body">
        <img className="card-body-pic" src={poster} alt="img"></img>
        <ul className="card-body-info">
          <li>Release Date: {date}</li>
          <li>Overview: {overview}</li>
        </ul>
      </div>
    </div>
  );
};

DataCard.defaultProps = {
  title: '',
  poster: '',
  date: '',
  overview: '',
};

DataCard.propTypes = {
  title: Proptypes.string,
  poster: Proptypes.string,
  date: Proptypes.string,
  overview: Proptypes.string,
};

export default DataCard;

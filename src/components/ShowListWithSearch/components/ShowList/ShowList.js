import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ShowList = ({ shows, onRemove }) => {
  const handleRemoveClick = (show) => {
    onRemove?.(show);
  };

  return (
    <div className="my-shows">
      <h2 className="show-list-title">My Shows</h2>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.id} className="show-list-item">
            <img className="show-image" src={show.image?.medium} />
            <p class="show-name">{show.name}</p>
            <div className="show-controls">
              <a href={`https://www.imdb.com/title/${show.externals.imdb}`} target="_blank">IMDb</a>
              <button className="show-remove-btn" onClick={() => handleRemoveClick(show)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
};

ShowList.propTypes = {
  shows: PropTypes.array
};

ShowList.defaultProps = {
  shows: []
};

export default ShowList;

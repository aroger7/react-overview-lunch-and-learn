import React, { useState } from 'react';
import ShowList from 'components/ShowListWithSearch/components/ShowList';
import ShowSearch from 'components/ShowListWithSearch/components/ShowSearch';
import './styles.css';

const ShowListWithSearch = ({ }) => {
  const [shows, setShows] = useState([]);

  const handleShowSelected = (show) => {
    if (show) {
      setShows([...shows, show]);
    }
  };

  const handleShowRemoved = (showToRemove) => {
    if (showToRemove) {
      setShows(shows.filter(show => show.id !== showToRemove.id));
    }
  }

  return (
    <div className="shows-with-search">
      <h1 className="shows-with-search-title">TV Show Catalogue</h1>
      <div className="sections-container">
        <div className="search-container">
          <ShowSearch onSelect={handleShowSelected}/>
        </div>
        <div className="shows-container">
          <ShowList shows={shows} onRemove={handleShowRemoved} />
        </div>
      </div>
    </div>
  );
};

export default ShowListWithSearch;

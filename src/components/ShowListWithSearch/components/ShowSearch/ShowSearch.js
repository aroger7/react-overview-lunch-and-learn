import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useDebounce from 'hooks/useDebounce';
import './styles.css';
import axios from 'axios';

const ShowSearch = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (evt) => {
    setInputValue(evt?.target?.value ?? '');
  };

  const handleShowSelect = (show) => {
    onSelect?.(show);
  };

  useEffect(() => {
    const search = async () => {
      setIsLoading(true);
      const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${debouncedInputValue}`);
      setResults(response?.data?.map(({ show }) => show) ?? []);
      setIsLoading(false);
    };

    if (debouncedInputValue) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedInputValue]);

  return (
    <div class="show-search">
      <h2 className="show-search-title">Add Shows</h2>
      <input className="show-search-input" value={inputValue} onChange={handleInputChange} />
      {isLoading 
        ? <p class="search-loading-text">Loading...</p>
        : (
          <ul className="show-results-list">
            {results.map((show) => (
              <li key={show.id}>
                <button className="show-result-btn" onClick={() => handleShowSelect(show)}>
                  {show.name} <span className="show-result-btn-add">+</span>
                </button>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

ShowSearch.propTypes = {
  onSelect: PropTypes.func,
}

ShowSearch.defaultProps = {
  onSelect: () => null
}

export default ShowSearch;

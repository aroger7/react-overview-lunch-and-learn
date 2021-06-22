import React, { useState } from 'react';
import './styles.css';

const BasicShowListExample = () => {
  const [shows, setShows] = useState(['Game of Thrones', 'The Wire', 'Breaking Bad']);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (evt) => {
    setInputValue(evt?.target?.value ?? '');
  }
  
  const handleAddClick = () => {
    setShows([...shows, inputValue]);
    setInputValue('');
  }

  return (
    <div class="shows">
      <div>
        <input className="shows-input" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add Show</button>
      </div>
      {shows.length > 5 && <p>We're over five shows? ALL HAIL TELEVISION</p>}
      <ul class="shows-list">
        {shows.map(show => <li key={show}>{show}</li>)}
      </ul>
    </div>
  )
};

export default BasicShowListExample;

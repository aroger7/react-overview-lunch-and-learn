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
  }

  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add Show</button>
      </div>
      <ul>
        {shows.map(show => <li key={show}>{show}</li>)}
      </ul>
    </div>
  )
};

export default BasicShowListExample;

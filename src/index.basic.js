import React from 'react';
import ReactDOM from 'react-dom';

const shows = ['Game of Thrones', 'The Wire', 'Breaking Bad']
let inputValue = '';

const handleInputChange = (evt) => {
  inputValue = evt?.target?.value;
  renderElements();
}

const handleAddClick = () => {
  shows.push(inputValue);
  renderElements();
}

const renderElements = () => {
  const elements = (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add Show</button>
      </div>
      <p>{shows.join(', ')}</p>
    </div>
  );
  ReactDOM.render(
    elements, 
    document.getElementById('root')
  );
}

renderElements();

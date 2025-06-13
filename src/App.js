import React, {useState, useEffect } from 'react';
import './App.css'; // Importing CSS for styling

// ItemList component
const ItemList = () => {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State to hold the current input value
  const [inputValue, setInputValue] = useState('');

  // useEffect to simulate fetching data
  useEffect(() => {
    // Simulating fetching data
    const initialItems = ['Apple', 'Banana', 'Cherry'];
    setItems(initialItems);
  }, []); // Empty array means it runs once when the component mounts

  // Function to handle adding a new items
  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]); //Update the state with the new item
      setInputValue(''); //Clear the input field
    }
  };

   // Function to handle removing an item
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Filter out the item at the given index
    setItems(newItems); // Update the state with the new list
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add item</button>

      {/* Single Styled div for displaying items */}
      <div className="item-display">
        <h2>Items:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
              <button onClick={() => removeItem(index)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <ItemList /> {/* Render the ItemList Component */}
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import "./home.css";

function InterestsPopup({ onClose, addInterest }) {
  const predefinedInterests = ['Sports', 'Technology', 'Travel', 'Food', 'Music'];
  const [selectedInterest, setSelectedInterest] = useState('');
  const [interests, setInterests] = useState([]);

  const addNewInterest = () => {
    if (selectedInterest && !interests.includes(selectedInterest)) {
      setInterests([...interests, selectedInterest]);
      setSelectedInterest('');
    }
  };

  const removeInterest = (interest) => {
    const updatedInterests = interests.filter(item => item !== interest);
    setInterests(updatedInterests);
  };

  const handleAddInterests = () => {
    addInterest(interests);
    onClose();
  };

  return (
    <div className="interests-popup-home">
      <h2>Add Interests</h2>
      <select
        value={selectedInterest}
        onChange={(e) => setSelectedInterest(e.target.value)}
      >
        <option value="">Select an interest</option>
        {predefinedInterests.map((interest, index) => (
          <option key={index} value={interest}>
            {interest}
          </option>
        ))}
      </select>
      <button onClick={addNewInterest} disabled={!selectedInterest}>
        Add
      </button>
      <ul className="selected-interests-home">
        {interests.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <span className="remove-icon-home" onClick={() => removeInterest(item)}>
              &#x2715;
            </span>
          </li>
        ))}
      </ul>
      <button onClick={handleAddInterests}>Save Interests</button>
    </div>
  );
}

export default InterestsPopup;
import React, { useState } from 'react';
import './EightBall.css'; 

// EightBall component 
function EightBall(props) {
  // Initial state setup for message and color
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  // Event handler for clicking the ball
const handleClick = () => {
    if (props.answers.length === 0) {
      console.error('The answers array is empty.');
      return; // Exit early if there are no answers
    }
    
    const randomAnswer = getRandomAnswer();
    
    if (!randomAnswer) {
      console.error('No random answer was found.');
      return; // Exit early if no answer is found
    }
  
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };
  
  // Function to choose a random answer
  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * props.answers.length);
    return props.answers[randomIndex];
  };
  

  // Render the EightBall UI
  return (
    <div className="eight-ball" onClick={handleClick} style={{ backgroundColor: color }}>
      <p className="eight-ball-message">{message}</p>
    </div>
  );
}

export default EightBall;

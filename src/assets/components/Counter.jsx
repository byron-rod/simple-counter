import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startCounter = () => {
    setCount(0);
    clearInterval(intervalId); 
    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const formatCount = () => {
    const backCount = count.toString().padStart(7, '0');
    return <div className="counter-value">{backCount}</div>;
  };

  return (
    <div className="counter">
      <div className="counter-display">{formatCount()}</div>
      <button className="start-button" onClick={startCounter}>Start</button>
      <button className="stop-button" onClick={stopCounter}>Stop</button>
    </div>
  );
};

export default Counter;

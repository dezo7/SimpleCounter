import React, { useState } from 'react';

const SecondsCounter = ({ seconds, onStart, onToggleActive, isActive, onReset }) => {
  const [inputTime, setInputTime] = useState('');

  const handleInputChange = (event) => {
    setInputTime(event.target.value);
  };

  const handleStartClick = () => {
    const time = parseInt(inputTime, 10);
    if (!isNaN(time) && time >= 0) {
      onStart(time);
    }
  };

  return (
    <div className="seconds-counter">
      <h1>
        <i className="fa-regular fa-clock"></i> {seconds} segundos
      </h1>
      <input type="number" value={inputTime} onChange={handleInputChange} placeholder="Cuenta regresiva" />
      <div>
        <button onClick={handleStartClick}>Iniciar</button>
        <button onClick={onToggleActive}>
          {isActive ? 'Pausar' : 'Reanudar'}
        </button>
        <button onClick={onReset}>Reiniciar</button>
      </div>
    </div>
  );
};

export default SecondsCounter;
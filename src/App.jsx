import React, { useState, useEffect } from 'react';
import './index.css';
import SecondsCounter from './components/SecondsCounter';

const App = () => {
  const [count, setCount] = useState(0);  // Comienza desde 0
  const [isActive, setIsActive] = useState(true);  // Activo desde el inicio
  const [startTime, setStartTime] = useState(0);  // Tiempo inicial configurado a 0
  const [isCountdown, setIsCountdown] = useState(false);  // Controla si es cuenta regresiva o no

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCount((prevCount) => isCountdown ? prevCount - 1 : prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (isCountdown && count === 0 && isActive) {
      alert('¡Tiempo alcanzado!');
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, count, isCountdown]);

  const handleStart = (time) => {
    setStartTime(time);
    setCount(time);
    setIsActive(true);
    setIsCountdown(true);  // Cambia a modo cuenta regresiva
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsCountdown(false);  // Vuelve al modo normal
    setCount(0);
    setIsActive(true);
  };

  return (
    <div className="app">
      <SecondsCounter 
        seconds={count} 
        onStart={handleStart} 
        onToggleActive={toggleActive} 
        isActive={isActive} 
        onReset={handleReset} 
      />
    </div>
  );
};

export default App;
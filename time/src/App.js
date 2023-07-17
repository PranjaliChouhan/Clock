import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className='wrap'>
    <div className='clock'>
      
      <h2 >Digital Clock</h2>
  
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
    </div>
    </>
  );
};

export default App;












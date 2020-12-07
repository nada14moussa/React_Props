import React from 'react';
import './App.css';

import Profile from './profile/Profile';

function App() {
  
  return (
    <div className="App">
     <Profile fullName="Nada MOUSSA" bio="Always learning new things" profession="Web devoleper"age={25} > <img src="/photo.jpg" alt="Me"/></Profile>
    </div>
  );
};


export default App;

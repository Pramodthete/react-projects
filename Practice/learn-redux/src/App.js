//App.js
import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
      <HomeContainer />
      <HomeContainer />
      <HomeContainer />
    </div>
  );
}

export default App;

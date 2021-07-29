import React from 'react';
import Welcome from './components/Welcome';
import './App.css';
import Navigation from './components/Navigation';
// import DisplayFlowers from './DisplayFlowers';

function App() {
  return (
    <div>
      <Navigation />
      <Welcome />
      {/* <DisplayFlowers /> */}
    </div>
  );
}

export default App;

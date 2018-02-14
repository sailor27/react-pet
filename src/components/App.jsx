import React from 'react';
import Header from './Header';
import Habitat from './Habitat';
// import { Switch, Route } from 'react-router-dom';


function App() {
  var appStyle = {
    boxSizing: 'border-box',
    margin: '0px',
    backgroundColor: '#FFFAFA',
    height: '100vh',
    width: '100vw',
    color: '#EB6EBD',
    fontFamily: 'sans-serif',
    fontSize: '18px'
  };
  return (
    <div style={appStyle}>
      <Header/>
      <Habitat/>
    </div>
  );
}



export default App;

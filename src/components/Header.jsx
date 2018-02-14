import React from 'react';


function Header() {
  var headerStyle = {
    backgroundColor: '#FFFAFA',
    color: '#EB6EBD',
    fontFamily: 'monospace',
    fontSize: '32px',
    textAlign: 'center'
  };
  return (
    <div style={headerStyle}>
      <h1>CRITTER~</h1>
      <h4>What a cute critter! Make sure your critter gets enough food, pets and sleep!</h4>
    </div>
  );
}

export default Header;

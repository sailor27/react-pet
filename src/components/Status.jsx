import React from 'react';


function Status() {

  var statusStyle = {
    border: '3px solid black',
    backgroundColor: 'lavender',
    height: '60px',
    width: '400px',
    marginBottom: '100px',
    marginTop: '20px'
  };
  return(
    <div style={statusStyle}>
      critter health
    </div>
  );
}

export default Status;

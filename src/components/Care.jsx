import React from 'react';

function Care() {

  var careStyle = {
    border: '3px dashed lavender',
    height: '70vh',
    width: '50vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center'
  };

  return(
    <div style={careStyle}>
      <h1>Click buttons to care for pet</h1>
    <div style={{display: 'flex', width: '80%', justifyContent: 'space-between'}}>
      <button>Feed</button>
      <button>Pet</button>
      <button>Sleep</button>
    </div>
    <style jsx>{`
      button {
        border: 3px solid black;
        padding: 8px;
        width: 100px;
        border-radius: 15px;
        font-size: 1em;
        background-color: pink;
      }
    `}
    </style>
    </div>
  );
}

export default Care;

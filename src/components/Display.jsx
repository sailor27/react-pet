import React from 'react';
import Status from './Status';
import Critter from './Critter';

var masterCritter =[
  {
  name: 'Browser',
  image: 'https://media.giphy.com/media/9nIIo3LBIlzvW/giphy.gif',
  status: "100"
  }
];


function Display() {

  var displayStyle = {
    border: '3px dashed magenta',
    height: '70vh',
    width: '50vw',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center'
  };

  return(
    <div style={displayStyle}>
      <Status/>
      <Critter
        name="Browser"
        image="https://media.giphy.com/media/9nIIo3LBIlzvW/giphy.gif"
        status="100"
      />
    </div>
  );
}



export default Display;

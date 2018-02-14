import React from 'react';
import Display from './Display';
import Care from  './Care';


function Habitat() {

  var habitatStyle= {
    border: '3px solid #EB6EBD',
    display: 'flex'
  }
  return(
    <div style={habitatStyle}>
      <Display/>
      <Care/>
    </div>
  );
}

export default Habitat;

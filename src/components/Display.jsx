import React from 'react';
import Status from './Status';
import Critter from './Critter';
import PropTypes from 'prop-types';


function Display(props) {

  var displayStyle = {
    border: '3px dashed magenta',
    height: '70vh',
    minWidth: '600px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center'
  };

  return(
    <div style={displayStyle}>
      <Status critterStatus={props.critterList.Pet.status}/>
      <Critter critterList={props.critterList}/>
    </div>
  );
}

Display.propTypes = {
  critterList: PropTypes.object
};

export default Display;

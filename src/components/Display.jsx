import React from 'react';
import Status from './Status';
import Critter from './Critter';
import PropTypes from 'prop-types';


function Display(props) {

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
      <div>
        {props.littleCritter.map((thing, i) =>
          <Critter name={thing.name}
            image={thing.image}
            status={thing.status}
            key={i}/>
        )}
      </div>
    </div>
  );
}

Display.propTypes = {
  littleCritter: PropTypes.array
};

export default Display;

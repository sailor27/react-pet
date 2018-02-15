import React from 'react';
import PropTypes from 'prop-types';


function Critter(props){
  var critterStyles = {
    display: 'flex',
    width: '50vw',
    flexFlow: 'column nowrap'
  };
  return (
    <div style={critterStyles}>
      <div className="critter-pic"  >
        <img src={props.critterList.pet.image}/>
      </div>
      <style jsx>{`
          img {
            border: 3px solid black;
          }
      `}
      </style>
      <h1>{props.critterList.pet.name}</h1>
      <h3>{props.critterList.pet.status} health</h3>
    </div>
  );
}

Critter.propTypes = {
  critterList: PropTypes.object
};

export default Critter;

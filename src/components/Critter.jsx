import React from 'react';
import PropTypes from 'prop-types';


function Critter(props){
  var critterStyles = {

  };
  return (
    <div style={critterStyles}>
      <div className="critter-pic" >
        <img src={props.image}/>
      </div>
      <style jsx>{`
          img {
            border: 3px solid black;
          }
      `}
      </style>
      <h1>{props.name}</h1>
      <h3>{props.status} health</h3>
    </div>
  );
}

Critter.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Critter;

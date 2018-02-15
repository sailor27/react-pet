import React from 'react';
import PropTypes from 'prop-types';


function Critter(props){
  console.log(props.critterList);
  var critterStyles = {

  };
  return (
    <div style={critterStyles}>
      <div className="critter-pic"  >
        <img src={props.critterList.Pet.image}/>
      </div>
      <style jsx>{`
          img {
            border: 3px solid black;
          }
      `}
      </style>
      <h1>{props.critterList.Pet.name}</h1>
      <h3>{props.critterList.Pet.status} health</h3>
    </div>
  );
}

Critter.propTypes = {
  critterList: PropTypes.object
};

export default Critter;

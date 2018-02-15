import React from 'react';
import PropTypes from 'prop-types';

function Care(props) {

  var careStyle = {
    border: '3px dashed lavender',
    minWidth: '600px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return(
    <div style={careStyle}>
      <h1>Click buttons to care for critter</h1>
      <div style={{display: 'flex', width: '80%', justifyContent: 'space-between', paddingBottom: '150px'}}>
        <button onClick={props.onFeed}>Feed</button>
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

Care.propTypes = {
  onFeed: PropTypes.func,
};

export default Care;

import React from 'react';
import PropTypes from 'prop-types';


function Status(props) {
  let bars = (props.critterStatus / 5);
  var statusStyle = {
    border: '3px solid black',
    backgroundColor: 'lavender',
    height: '60px',
    width: '400px',
    marginBottom: '100px',
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center'
  };
  return(

    <div style={statusStyle}>
      <div>{props.critterStatus}</div>

      <style jsx>{`
          .bar{
            height: 90%;
            background-color: magenta;
            width: 18px;
            margin: 1px;
          }
          `}
      </style>
    </div>
  );
}

Status.propTypes = {
  critterStatus: PropTypes.number
};

export default Status;

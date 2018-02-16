import React from 'react';
import PropTypes from 'prop-types';



function Status(props) {
  let bars = (props.critterStatus / 5);

  function makeDiv(){
    for (let i = 20; i < bars; i--){
      console.log(i);
      <div className="bar"></div>;
    }
  }

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
    makeDiv(),
    <div style={statusStyle}>


      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
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

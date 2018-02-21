import React from 'react';
import PropTypes from 'prop-types';



function Status(props) {
  let status = (props.critterStatus / 5);
  console.log(status);
  function makeBars(){
    for(let i = status; i > 0; i--){
      document.createElement('div', {class: 'bar'});
      // console.log('hi');
    }
  }
  let bars = makeBars();

  console.log(bars);

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
      {bars}
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

import React from 'react';
import Display from './Display';
import Care from  './Care';

class Habitat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCritter: [
        {
          name: 'Browser',
          image: 'https://media.giphy.com/media/9nIIo3LBIlzvW/giphy.gif',
          status: '100'
        }
      ]
    };
  }


  render() {
    return(
      <div className="habitatStyle">
        <style jsx> {`
          .habitatStyle: {
            border: '3px solid #EB6EBD';
            display: 'flex';
          }
          `}
        </style>
        <Display littleCritter={this.state.masterCritter}/>
        <Care/>
      </div>

    );
  }
}

export default Habitat;

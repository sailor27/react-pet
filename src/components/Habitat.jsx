import React from 'react';
import Display from './Display';
import Care from  './Care';

class Habitat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCritterList: {
        'Pet': {
          name: 'Browser',
          image: 'https://media.giphy.com/media/9nIIo3LBIlzvW/giphy.gif',
          status: 100
        }
      }
    };
  }

  render() {
    return(
      <div>
        <style jsx> {`
            div {
              border: 3px solid #EB6EBD;
              display: flex;
              flex-flow: row nowrap;
            }
            `}
        </style>
        <Display critterList={this.state.masterCritterList}/>
        <Care/>
      </div>


    );
  }
}

export default Habitat;

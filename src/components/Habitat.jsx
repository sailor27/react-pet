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
          image: 'https://www.pets4homes.co.uk/images/classifieds/2013/09/07/414786/f0bc3208e2babea629a94d78878d95e1.jpg',
          status: 100
        }
      }
    };
  }

  componentDidMount() {
    this.updateTimer = setInterval(() =>
      this.updateElapsedTime(),
    5000
    );
  }

  updateElapsedTime(){
    let newMasterCritterList = Object.assign({}, this.state.masterCritterList);
    console.log(newMasterCritterList.Pet);
    newMasterCritterList.Pet.status -= 10;
    this.setState({masterCritterList: newMasterCritterList});
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

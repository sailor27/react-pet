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
    this.handleFeedingCritter = this.handleFeedingCritter.bind(this);
  }

  componentDidMount() {
    this.updateTimer = setInterval(() =>
      this.decreaseStatus(),
    5000
    );
  }

  decreaseStatus(){
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.Pet.status -= 10;
    this.setState({masterCritterList: newMasterCritterList});
  }

  handleFeedingCritter(){
    console.log('handleFeedingCritter is triggered');
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.Pet.status += 20;
    this.setState({masterCritterList: newMasterCritterList});
  }

  render() {
    return(
      <div className="habitat">
        <style jsx> {`
            .habitat {
              background-color: lightblue;
              border: 3px solid #EB6EBD;
              display: flex;
            }
            `}
        </style>
        <Display critterList={this.state.masterCritterList}/>
        <Care onFeed={this.handleFeedingCritter}/>
      </div>


    );
  }
}

export default Habitat;

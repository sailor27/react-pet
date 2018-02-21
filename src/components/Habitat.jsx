import React from 'react';
import Display from './Display';
import Care from  './Care';
class Habitat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCritterList: {
        'pet': {
          name: 'Browser',
          image: 'https://media.giphy.com/media/9nIIo3LBIlzvW/giphy.gif',
          status: 100
        }
      }
    };
    this.handleFeedingCritter = this.handleFeedingCritter.bind(this);
    this.handlePettingCritter = this.handlePettingCritter.bind(this);
    this.handleSleepingCritter = this.handleSleepingCritter.bind(this);
  }

  componentDidMount() {
    this.updateTimer = setInterval(() =>
      this.decreaseStatus(),
    7000
    );
  }

  decreaseStatus(){
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.pet.status -= 10;
    this.setState({masterCritterList: newMasterCritterList});
  }

  handleFeedingCritter(){
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.pet.status += 20;
    this.setState({masterCritterList: newMasterCritterList});
    alert('Yum! ' + this.state.masterCritterList.pet.name + ' loves food!');
  }

  handlePettingCritter() {
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.pet.status += 20;
    this.setState({masterCritterList: newMasterCritterList});
    alert('☺️ ' + this.state.masterCritterList.pet.name + ' loves pets!');
  }

  handleSleepingCritter(){
    let newMasterCritterList = this.state.masterCritterList;
    newMasterCritterList.pet.status += 20;
    this.setState({masterCritterList: newMasterCritterList});
    alert('😴! ' + this.state.masterCritterList.pet.name + ' loves to sleep!');
  }

  render() {
    return(
      <div className="habitat">
        <style jsx> {`
            .habitat {
              border: 3px solid #EB6EBD;
              display: flex;
            }
            `}
        </style>
        <Display critterList={this.state.masterCritterList}/>
        <Care onFeed={this.handleFeedingCritter} onPet={this.handlePettingCritter} onSleep={this.handleSleepingCritter}/>
      </div>


    );
  }
}

export default Habitat;

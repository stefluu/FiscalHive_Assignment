import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Gear from './OneTimeCosts/Gear';
import ItemSection from './OneTimeCosts/ItemSection';
// import Activity from './OneTimeCosts/Activity';
// import Nursery from './OneTimeCosts/Nursery';
// import Feeding from './OneTimeCosts/Feeding';
// import BreastFeeding from './OneTimeCosts/BreastFeeding';
// import BathingGrooming from './OneTimeCosts/BathingGrooming';
import Other from './OneTimeCosts/Other';
import Data from './AllData';

class OneTimeCosts extends Component {
  constructor(props){
    super(props);
    this.total = 4424
    this.part = 1
    this.state = {
      part1Total: 0,
      part2Total: 0,
      part3Total: 0,
      part4Total: 0,
      part5Total: 0,
      part6Total: 0,
      part7Total: 0
    };
    this.itemsData = Data.allData;
  }


  setPartTotalGoNext = (partNumTotal, total, breakdown) => {
    this.setState({[partNumTotal]: total});
    this.part += 1;
    
    if(partNumTotal === "part7Total"){
      this.finishOneTimeTotal(total, this.state);
    }
  };
  
  goPartBack = (partNumTotal) => {
    this.setState({[partNumTotal]: 0})
    this.part -= 1;
  };

  finishOneTimeTotal = (total, breakdown) => {
    let finalTotal = total;
    for(let i in this.state){
      finalTotal += this.state[i];
    };
    this.props.setTotal("oneTimeTotal", finalTotal, breakdown);
  }

  render() {
    let component;

    switch (this.part) {
      case 1:
        component = (
          <Gear
            data = {this.itemsData.gear}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goBack={this.props.goBack}
            goPartBack = {this.goPartBack.bind(this)}          />
        );
        break;

      case 2:
        // component = (
        //   <Activity
        //     data = {this.itemsData.a}
        //     setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
        //     goPartBack = {this.goPartBack.bind(this)}          />
        // );

        component = (
          <ItemSection
            data={this.itemsData.activity}
            refName = "part2Total"
            sectionName = "Activity Equipment $"
            threeCol = {false}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack={this.goPartBack.bind(this)} />
        );
        break;

      case 3:
        // component = (
        //   <Nursery
        //     setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
        //     goPartBack = {this.goPartBack.bind(this)}          />
        // );
        component = (
          <ItemSection
            data={this.itemsData.nursery}
            refName="part3Total"
            sectionName="Nursery $"
            threeCol={true}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack={this.goPartBack.bind(this)} />
        );
        break;

      case 4:
        // component = (
        //   <Feeding
        //     setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
        //     goPartBack = {this.goPartBack.bind(this)}          />
        // );
        component = (
          <ItemSection
            data={this.itemsData.feeding}
            refName="part4Total"
            sectionName="Feeding $"
            // threeCol={true}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack={this.goPartBack.bind(this)} />
        );
        break;

      case 5:
        // component = (
        //   <BreastFeeding
        //     setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
        //     goPartBack = {this.goPartBack.bind(this)}          />
        // );
        component = (
          <ItemSection
            data={this.itemsData.breastfeeding}
            refName="part5Total"
            sectionName="BreastFeeding $"
            // threeCol={true}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack={this.goPartBack.bind(this)} />
        );
        break;

      case 6:
        // component = (
        //   <BathingGrooming
        //     setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
        //     goPartBack = {this.goPartBack.bind(this)}          />
        // );
        component = (
          <ItemSection
            data={this.itemsData.bathingGrooming}
            refName="part6Total"
            sectionName="Bathing/Grooming $"
            // threeCol={true}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack={this.goPartBack.bind(this)} />
        );
        break;

      case 7:
        component = (
          <Other
            data={this.itemsData.gear}
            setPartTotalGoNext={this.setPartTotalGoNext.bind(this)}
            goPartBack = {this.goPartBack.bind(this)}
            closeModal = {this.props.closeModal}          />
        );
        break;

      default:
          this.props.goNext()
        break;
    }

    return (
      <div className="oneTimeCosts">
        <h1>One-Time Costs</h1>
        <p className="weChecked">We've checked the things we think you'll need -- 
          but please make adjustments based on what you plan to buy and how much you expect to spend.
        </p>

        {component}

      </div>
    )
  }
}

export default withRouter(OneTimeCosts);

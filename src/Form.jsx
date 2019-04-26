import React, { Component } from 'react';
// import { withRouter, Redirect, Route } from 'react-router-dom';
import OngoingCosts from './OngoingCosts';
import OneTimeCosts from './OneTimeCosts';
import ResultsModal from './Results/ResultsModal';

export default class Form extends Component {
    state = {
        step: 1,
        ongoingTotal: 6192,
        ongoingBreakdown: {},
        oneTimeTotal: 4424,
        oneTimeBreakdown: {}
    };

    goNext = () => {
      let currentStep = this.state.step;
      this.setState({step: currentStep + 1});
    };

    goBack = () => {
      let currentStep = this.state.step;
      this.setState({step: currentStep - 1});
    };

    setTotal = (type, total, breakdown) => {
      this.setState({[type]: total});

      if(type === "ongoingTotal"){
        this.setState({ongoingBreakdown: breakdown})
      } else {
        this.setState({oneTimeBreakdown: breakdown})
      };
    };

  render() {
    let component;

    switch (this.state.step) {
      case 1:
        component = (
          <OngoingCosts
            goNext={this.goNext.bind(this)}
            goBack={this.goBack.bind(this)}
            setTotal={this.setTotal.bind(this)}
          />
        );
        break;

      case 2:
        component = (
          <OneTimeCosts
            goNext={this.goNext.bind(this)}
            goBack={this.goBack.bind(this)}
            setTotal={this.setTotal.bind(this)}
            closeModal={this.props.closeModal}
          />
        );
        break;

      case 3: 
        component = (
          <ResultsModal finalState={this.state} />
        )
        break;

      default:
        break;
    }



    return (
      <div>
        {component}
      </div>
    )
  }
}

// export default withRouter(Form);

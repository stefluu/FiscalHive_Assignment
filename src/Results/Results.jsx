import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactSvgPieChart from "react-svg-piechart";
import OnGoingBreakdown from "./ongoingBreakdown";
import OneTimeBreakdown from "./oneTimeBreakdown";

export default class Results extends Component {
  state = {
    redirect: false
  };


  setRedirect = () => {
    this.setState({redirect: true});
  };

  render() {
    if(this.state.redirect){

      return <Redirect push to="/"></Redirect>

    } else {
      let ongoingTotal = this.props.location.state.finalState.ongoingTotal;
      let oneTimeTotal = this.props.location.state.finalState.oneTimeTotal;
  
      const data = [
        { title: "ongoingTotal", value: ongoingTotal, color: "teal"},
        { title: "oneTimeTotal", value: oneTimeTotal, color: "#b5e6fc"}
      ]
      return (
        <div className="resultsPage">
          <div className="resultsTop">
            <h1>Your baby's first year will cost: </h1>
            <h1>${this.props.location.state.total}</h1>
          </div>
          <br />
  
          <div className="resultsMain">
              <ReactSvgPieChart 
                  data= {data}
                  expandOnHover = {true}
              />
  
              <div className="breakdownContainer">
                <OnGoingBreakdown
                  total={ongoingTotal} 
                  breakdown={this.props.location.state.finalState.ongoingBreakdown}/>
                <OneTimeBreakdown 
                  total={oneTimeTotal}
                  breakdown={this.props.location.state.finalState.oneTimeBreakdown}/>
              </div>
          </div>
  
          <button 
            className="startOver formButtons"
            onClick={this.setRedirect}
          >Calculate Again</button>
        </div>
      )
    }
  }
}
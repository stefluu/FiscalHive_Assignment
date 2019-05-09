import React, { Component } from 'react';
import Childcare from './OngoingCosts/Ongoing1';
import OnGoingSection2 from './OngoingCosts/Ongoing2';
import OnGoingSection3 from './OngoingCosts/Ongoing3';

export default class OngoingCosts extends Component {
    state = {
        childcare: 1896,
        babySitter: 600,
        diapers: 228,
        wipes: 240,
        formula: 630,
        solidFoods: 342,
        clothing: 708,
        college: 600,
        meds: 276,
        toiletries: 252,
        toys: 420
    }

    update = (type, updatedVal) => {
        this.setState({[type]: updatedVal});
    };

    remove = (type) => {
        this.setState({[type]: 0});
    };

    goNextAndSaveTotal = (total, breakdown) => {
        this.props.setTotal("ongoingTotal", total, breakdown);
        this.props.goNext();
    }

  render() {
      let total = 0;

      for(let i in this.state){
          total += this.state[i];
      };
      console.log(total);

    return (
      <div>
        <h1>Ongoing Costs</h1>
        <Childcare 
            update={this.update.bind(this)} 
            remove={this.remove.bind(this)}/>
    
        <OnGoingSection2 
            update={this.update.bind(this)}
            remove={this.remove.bind(this)} />
        
        <OnGoingSection3 
            update={this.update.bind(this)}
            remove={this.remove.bind(this)} />

        <h4>Subtotal of Ongoing Costs: $ {total}</h4>

        <div className="buttons">
            <button 
                className="formButtons" 
                onClick={() => this.goNextAndSaveTotal(total, this.state)}
            >Next</button>
        </div>
    </div>
    )
  }
}

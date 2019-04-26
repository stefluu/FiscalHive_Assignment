import React, { Component } from 'react'

export default class oneTimeBreakdown extends Component {
  render() {
    let breakdownArr = Object.entries(this.props.breakdown);

    let displayCategories = [
        "Gear",
        "Activity Equipment",
        "Nursery",
        "Feeding",
        "Breastfeeding",
        "Bathing/Grooming",
        "Other"
    ];
    return (
      <div className="breakdown">
        <p className="breakdownTitle" id="oneTimeTitle">
          One-Time Costs Breakdown
        </p>
        <div>
          <ul className="oneTimeBreakdown">
            {breakdownArr.map((subarr, i) => (
              <li key={subarr[0]}>
                <div className="breakdownLiDiv">
                  <div>{displayCategories[i]}</div>
                  <div>{subarr[1]}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h4>One-Time Cost Total: ${this.props.total}</h4>
      </div>
    );
  }
}

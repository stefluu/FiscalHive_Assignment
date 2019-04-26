import React, { Component } from 'react'

export default class ongoingBreakdown extends Component {
  render() {

    let breakdownArr = Object.entries(this.props.breakdown);

    let displayCategories = [
        "Childcare",
        "Babysitter",
        "Diapers",
        "Wipes",
        "Formula",
        "Solid Foods",
        "Clothing",
        "Savings for College",
        "Medicine/First Aid",
        "Toiletries",
        "Toys/Books/Media"
    ]
    return (
        <div className="breakdown">
            <p className="breakdownTitle">On-Going Costs Breakdown</p>
            <div>
                <ul>
                    {breakdownArr.map((subarr, i) => (
                        <li key={subarr[0]}>
                            <div className="breakdownLiDiv">
                                <div>
                                    {displayCategories[i]}
                                </div>
                                <div>
                                    {subarr[1]}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <h4>On-Going Cost Total: ${this.props.total}</h4>
      </div>
    )
  }
}

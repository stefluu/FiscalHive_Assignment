import React, { Component } from 'react';

export default class Childcare extends Component {
    state = {
        perMonth: 316
    };

    setPerMonth = (e) => {
        this.setState({perMonth: parseInt(e.target.value)});
    };

    getNewChildcareVal = (e) => {
        let newVal = e.target.value * this.state.perMonth;
        this.props.update("childcare", newVal);
    };

    handleBabysitting = () =>{
        if(document.getElementById("babysittingCheckbox").checked){
            let val = document.getElementById("babySitterValInput").value;
            this.addBabysitting(val);
        } else {
            this.removeBabysitting();
        };
    };

    addBabysitting = (val) => {
        document.getElementById("babysittingCheckbox").checked = true;
        let newVal = 12 * val;
        this.props.update("babySitter", newVal);
    };

    removeBabysitting = () => {
        if (!document.getElementById("babysittingCheckbox").checked){
            this.props.remove("babySitter")
        }
    }

  render() {
    return (
    <div className="itemSection">
        <p className="sectionName">Childcare</p>
        <div className="sectionInputs">
        <ul>
            <li>
                <input
                    type="radio"
                    onClick={() => this.props.update("childcare", 0)}
                >
                </input>
                I won't be paying for regular childcare.
            </li>

            <li>
                 <input
                    type="radio"
                />
                Help me estimate. I'll use a:
                <br />

                <select>
                    <option>Daycare Center</option>
                    <option>Home Daycare</option>
                    <option>Nanny</option>
                </select>

                <select onChange={this.setPerMonth}>
                    <option value="316">Low: $316/month</option>
                    <option value="768">Moderate: $768/month</option>
                    <option value="1221">High: $1221/month</option>
                </select>
                <input 
                    type="text" 
                    defaultValue="6"
                    onChange={this.getNewChildcareVal}
                /> X months
            </li>

            <li>
                <input
                    type="radio"
                />
                I know exactly. I'll spend:
                <br />
                <input 
                    type="text"
                    defaultValue="0"
                    onChange={this.setPerMonth} /> 
                <input 
                    type="text" 
                    defaultValue="6"
                    onChange={this.getNewChildcareVal} /> X months
            </li>

            <li>
                <input
                    id="babysittingCheckbox"
                    type="checkbox"
                    onChange = {this.handleBabysitting}
                    defaultChecked
                />
                I'll use an occasional babysitter:
                <br />
                <input 
                    id="babySitterValInput"
                    type="text" 
                    defaultValue="50"
                    onChange={this.addBabysitting} /> per month x 12 months
            </li>
        </ul>
        </div>
    </div>
    )
  }
}

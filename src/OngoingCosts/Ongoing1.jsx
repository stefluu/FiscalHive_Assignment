import React, { Component } from 'react';

export default class Childcare extends Component {
    state = {
        estimateChildcare: [316, 6],
        exactChildcare: [0, 6]
    };

    setPerMonth = (type, e) => {

        this.changeToChecked();

        let submittedVal = parseInt(e.target.value);
        if(!submittedVal){
            submittedVal = 0;
        }
        if(type === "estimateChildcare") {
            let months = this.state.estimateChildcare[1];
            this.setState({ estimateChildcare: [submittedVal, months] }, () => this.getNewChildcareVal());
        } else {
            let months = this.state.exactChildcare[1];
            this.setState({ exactChildcare: [submittedVal, months] }, () => this.getNewChildcareVal());
        }
    };

    setNumMonths = (type, e) => {

        this.changeToChecked();

        let submittedMonths = parseInt(e.target.value);
        if (!submittedMonths) {
            submittedMonths = 0;
        }

        if (type === "estimateChildcare") {
            let perMonths = this.state.estimateChildcare[0];
            this.setState({ estimateChildcare: [perMonths, submittedMonths] }, () => this.getNewChildcareVal());
        } else {
            let perMonths = this.state.exactChildcare[0];
            this.setState({ exactChildcare: [perMonths, submittedMonths] }, () => this.getNewChildcareVal());
        }

    }

    changeToChecked = (type) => {
        let estimateCC = document.getElementById("estimateChildcare");
        let exactCC = document.getElementById("exactChildcare");

        if(type === "estimateChildcare") {
            estimateCC.checked = true;
        } else {
            exactCC.checked = true;
        }
    }


    getNewChildcareVal = () => {
        let estimateCC = document.getElementById("estimateChildcare");
        let exactCC = document.getElementById("exactChildcare");
        let newVal;
        

        if (estimateCC.checked) {
            newVal = this.state.estimateChildcare[0] * this.state.estimateChildcare[1];
        } else if(exactCC.checked) {
            newVal = this.state.exactChildcare[0] * this.state.exactChildcare[1];
        }
        this.props.update("childcare", newVal);
    }

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
                    name="childCare"
                    onClick={() => this.props.remove("childcare")}
                >
                </input>
                I won't be paying for regular childcare.
            </li>

            <li>
                 <input
                    type="radio"
                    name="childCare"
                    id="estimateChildcare"
                    defaultChecked
                    onChange={this.getNewChildcareVal}
                />
                Help me estimate. I'll use a:
                <br />

                <select>
                    <option>Daycare Center</option>
                    <option>Home Daycare</option>
                    <option>Nanny</option>
                </select>

                <select onChange={(e) => this.setPerMonth("estimateChildcare", e)}>
                    <option value="316">Low: $316/month</option>
                    <option value="768">Moderate: $768/month</option>
                    <option value="1221">High: $1221/month</option>
                </select>
                <input 
                    type="text" 
                    defaultValue="6"
                    onChange={(e) => this.setNumMonths("estimateChildcare", e)}
                /> X months
            </li>

            <li>
                <input
                    type="radio"
                    name="childCare"
                    id="exactChildcare"
                    onChange={this.getNewChildcareVal}
                />
                I know exactly. I'll spend:
                <br />
                <input 
                    type="text"
                    defaultValue="0"
                    onChange={(e) => this.setPerMonth("exactChildcare", e)} /> 
                <input 
                    type="text" 
                    defaultValue="6"
                    onChange={(e) => this.setNumMonths("estimateChildcare", e)} 
                /> X months
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

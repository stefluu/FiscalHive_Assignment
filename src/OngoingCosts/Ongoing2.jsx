import React, { Component } from 'react';

export default class Ongoing2 extends Component {

    state = {
        formulaMonths: 6,
        solidFoodMonths: 6
    };

    handleItem = (id, selectId, perMonth, monthCount) => {
        let idEle = document.getElementById(id);
        let selectIdEle = document.getElementById(selectId);

        if(idEle) {
            if (idEle.checked) {
                if (perMonth && monthCount) {
                    let perMonthVal = document.getElementById(perMonth).value;
                    let monthCountVal = document.getElementById(monthCount).value;
                    this.addItem(id, perMonthVal, monthCountVal);
                } else {
                    if(selectIdEle) {
                        let val = selectIdEle.value;
                        this.add12MonthItem(id, val);
                    }
                }
                
            } else {
                this.removeItem(id);
            };
        }
    };

    addItem = (id, perMonth, monthCount) => {
        document.getElementById(id).checked = true;
        let newVal = perMonth * monthCount;
        this.props.update(id, newVal);
    };    

    add12MonthItem = (id, val) => {
        document.getElementById(id).checked = true;
        let newVal = 12 * val;
        this.props.update(id, newVal);
    };

    removeItem = (id) => {
        if (!document.getElementById(id).checked) {
            this.props.remove(id)
        }
    }

    setPerMonth = (e, type) => {
        this.setState({[type]: e.target.value});
    };
    
  render() {
    return (
    <div>
        <div className="itemSection">
            <p className="sectionName">Diapering</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                            id="diapers"
                            type="checkbox"
                            onChange = {() => this.handleItem("diapers", "diapersVal")}
                            defaultChecked
                        />
                        I'll be using:
                        <br />
                        <select 
                            id="diapersVal"
                            onChange={(e) => this.props.update("diapers", parseInt(e.target.value) * 12)}>
                            <option value="19">cloth diapers I wash myself: $19/month</option>
                            <option value="76">a cloth diaper service: $76/month</option>
                            <option value="72">disposable diapers: $72/month</option>
                        </select>
                    </li>

                    <li>
                        <input
                            id="wipes"
                            type="checkbox"
                            onChange={() => this.handleItem("wipes")}
                            defaultChecked
                        />
                        Wipes
                    <br />
                        <input
                            id="wipesVal"
                            type="text"
                            defaultValue="20"
                            onChange={(e) => this.props.update("wipes", parseInt(e.target.value) * 12)} 
                        /> per month x 12 months
                    </li>
                </ul>
            </div>
        </div>

        <div className="itemSection">
            <p className="sectionName">Feeding</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                        id="breastFeeding"
                        type="checkbox"
                        onChange={() => this.handleItem("breastfeeding")}
                        defaultChecked
                        />
                        I plan to breastfeed: $0 per month x 12 months
                    </li>

                    <li>
                        <input
                        id="formula"
                        type="checkbox"
                        onChange={() => 
                            this.handleItem("formula", "", "forumlaPerMonth", "formulaMonthCount")}
                        defaultChecked
                    />
                    Formula: I'll spend
                        <br />
                        <input
                            id="forumlaPerMonth"
                            type="text"
                            defaultValue="105"
                            onChange={(e) => this.setPerMonth(e, "formulaMonths")} /> per month X
                        <input 
                            id="formulaMonthCount"
                            type="text" 
                            defaultValue="6"
                            onChange={(e) => 
                                this.props.update("formula", this.state.formulaMonths * e.target.value)}  
                        /> months
                    </li>
                    <li>
                        <input
                        id="solidFoods"
                        type="checkbox"
                        onChange={() => this.handleItem("solidFoods", "", "solidFoodsPerMonth", "solidFoodsMonthCount")}
                        defaultChecked
                    />
                    Solid foods: I'll spend
                        <br />
                        <input
                            id="solidFoodsPerMonth"
                            type="text"
                            defaultValue="57"
                            onChange={(e) => this.setPerMonth(e, "solidFoodMonths")} /> per month X
                        <input
                            id="solidFoodsMonthCount"
                            type="text"
                            defaultValue="6"
                            onChange={(e) => 
                                this.props.update("solidFood", this.state.solidFoodMonths * e.target.value)}
                        /> months
                    </li>
                </ul>
            </div>
        </div>

        <div className="itemSection">
            <p className="sectionName">Clothing</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                            id="clothing"
                            type="checkbox"
                            onChange={() => this.handleItem("clothing", "clothingVal")}
                            defaultChecked
                        />
                        I'll probably spend
                        <br />
                        <input
                            id="clothingVal"
                            type="text"
                            defaultValue="59"
                            onChange={(e) => this.props.update("clothing", parseInt(e.target.value) * 12)}
                        /> per month x 12 months
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
  }
}

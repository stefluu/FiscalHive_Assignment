import React, { Component } from 'react';

export default class Ongoing3 extends Component {

    handleItem = (id, selectId) => {
        let idEle = document.getElementById(id);
        let selectIdEle = document.getElementById(selectId);
        if(idEle) {
            if (idEle.checked) {
                if(selectIdEle){
                    let val = document.getElementById(selectId).value;
                    this.add12MonthItem(id, val);
                }
            } else {
                this.removeItem(id);
            };
        }
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

  render() {
    return (
        <div>
            <div className="itemSection">
                <p className="sectionName">Savings for College</p>
                <div className="sectionInputs">
                    <ul>
                        <li>
                            <input
                                id="college"
                                type="checkbox"
                                onChange={() => this.handleItem("college", "collegeVal")}
                                defaultChecked
                            />
                            I'll try to save
                            <br />
                            <input
                                id="collegeVal"
                                type="text"
                                defaultValue="50"
                                onChange={(e) => this.props.update("college", parseInt(e.target.value) * 12)}
                            /> per month x 12 months
                        </li>
                    </ul>
                </div>
            </div>
        <br />

        <div className="itemSection">
            <p className="sectionName">Medicine/First Aid</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                            id="meds"
                            type="checkbox"
                            onChange={() => this.handleItem("meds", "medsVak")}
                            defaultChecked
                        />
                        I'll probably spend
                        <br />
                        <input
                            id="medsVal"
                            type="text"
                            defaultValue="23"
                            onChange={(e) => this.props.update("meds", parseInt(e.target.value) * 12)}
                        /> per month x 12 months
                    </li>
                </ul>
            </div>
        </div>
        <br />

        <div className="itemSection">
            <p className="sectionName">Toiletries</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                            id="toiletries"
                            type="checkbox"
                            onChange={() => this.handleItem("toiletries","toiletriesVal")}
                            defaultChecked
                        />
                        I'll probably spend
                        <br />
                        <input
                            id="toiletriesVal"
                            type="text"
                            defaultValue="21"
                            onChange={(e) => this.props.update("toiletries", parseInt(e.target.value) * 12)}
                        /> per month x 12 months
                    </li>
                </ul>
            </div>
        </div>
        <br />

        <div className="itemSection">
                <p className="sectionName">Toys/Books/Media</p>
            <div className="sectionInputs">
                <ul>
                    <li>
                        <input
                        id="toys"
                        type="checkbox"
                        onChange={() => this.handleItem("toys","toysVal")}
                        defaultChecked
                        />
                        I'll probably spend
                        <br />
                        <input
                            id="toysVal"
                            type="text"
                            defaultValue="35"
                            onChange={(e) => this.props.update("toys", parseInt(e.target.value) * 12)}
                        /> per month x 12 months
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

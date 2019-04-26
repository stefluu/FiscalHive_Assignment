import React, { Component } from 'react';

export default class Other extends Component {


     constructor(props) {
        super(props);
        this.total = 524;
        this.state = {
            n1: 43,
            n2: 120,
            n3: 25,
            n4: 96,
            n5: 8,
            n6: 30,
            n7: 50,
            n8: 25,
            n9: 127,
            n10: 0
        }
    }

    setNewPrice = (e, itemId) => {
        if (e.target.value) {
            this.setState({ [itemId]: parseInt(e.target.value) });
        } else {
            this.setState({ [itemId]: 0 });
        };
    };

    finish = (total) =>{
        this.props.setPartTotalGoNext("part7Total", total);
    }

    render() {

    let otherItems = [
      { id: "bg1", item: "Childproofing supplies", price: 43 },
      { id: "bg2", item: "Safety gates (2)", price: 120 },
      { id: "bg3", item: "Diaper pail", price: 25 },
      { id: "bg4", item: "Diaper pail refills", price: 96 },
      { id: "bg5", item: "Pacifiers", price: 8 },
      { id: "bg6", item: "Humidifier ($29 - $69", price: 30 },
      { id: "bg7", item: "Birth announcements (50)", price: 50 },
      { id: "bg8", item: "Baby book or scrapbook ($12 - $40)", price: 25 },
      { id: "bg9", item: "Photo printing costs", price: 127 },
      { id: "bg10", item: "Miscellaneous", price: 0 }
    ];

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
            <div className="itemSection">
                <p className="sectionName">Other ${total}</p>
                <ul className="itemList threeColumns">
                    {otherItems.map(otherItem => (
                        <li key={otherItem.id}>
                            <p className="listItem">{otherItem.item}</p>
                            <input
                                type="text"
                                defaultValue={otherItem.price}
                                onChange={(e) => this.setNewPrice(e, otherItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button 
                        className="formButtons" 
                        onClick={() => this.props.goPartBack("part7Total")}
                    >Back</button>

                    <button
                        className="formButtons" 
                        onClick={() => this.finish(total)}
                    >Next</button>
                </div>
            </div>
        )
    }
}


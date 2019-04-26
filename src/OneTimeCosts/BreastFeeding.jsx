import React, { Component } from 'react';

export default class BreastFeeding extends Component {
constructor(props) {
        super(props);
        this.total = 457;
        this.state = {
            b1: 250,
            b2: 30,
            b3: 73,
            b4: 75,
            b5: 29
        }
    }

    setNewPrice = (e, itemId) => {
        if (e.target.value) {
            this.setState({ [itemId]: parseInt(e.target.value) });
        } else {
            this.setState({ [itemId]: 0 });
        };
    };

    render() {

        let breastFeedingItems = [
            { id: "b1", item: "Electric breast pump ($150 - $350)", price: 250 },
            { id: "b2", item: "Manual breast pump", price: 30 }, 
            { id: "b3", item: "Milk storage bags, breast pads, extra breast shields, ice packs", price: 73 },
            { id: "b4", item: "Nursing bras (3)", price: 75 }, 
            { id: "b5", item: "Nursing pillow ($24 - $44)", price: 29 }
         ]

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
            <div className="itemSection">
                <p className="sectionName">BreastFeeding ${total}</p>
                <ul className="itemList threeColumns">
                    {breastFeedingItems.map(breastFeedingItem => (
                        <li key={breastFeedingItem.id}>
                            <p className="listItem">{breastFeedingItem.item}</p>
                            <input
                                type="text"
                                defaultValue={breastFeedingItem.price}
                                onChange={(e) => this.setNewPrice(e, breastFeedingItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button
                        className="formButtons" 
                        onClick={() => this.props.goPartBack("part5Total")}
                    >Back</button>

                    <button 
                        className="formButtons"
                        onClick={() => this.props.setPartTotalGoNext("part5Total", total)}
                    >Next</button>
                </div>
            </div>
        )
    }
}

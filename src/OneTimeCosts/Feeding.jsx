import React, { Component } from 'react'

export default class Feeding extends Component {
  constructor(props) {
        super(props);
        this.total = 234;
        this.state = {
            f1: 60,
            f2: 100,
            f3: 13,
            f4: 10,
            f5: 21,
            f6: 10,
            f7: 8,
            f8: 12
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

        let feedingItems = [
      { id: "f1", item: "Bottles and nipples", price: 60 },
      { id: "f2", item: "Highchair ($60 - $250)", price: 100 },
      { id: "f3", item: "Utensils", price: 13 },
      { id: "f4", item: "Plates and bowls", price: 10 },
      { id: "f5", item: "Cups and sippy cups", price: 21 },
      { id: "f6", item: "Burp cloths (6)", price: 10 },
      { id: "f7", item: "Bottle Brush (2)", price: 8 },
      { id: "f8", item: "Bibs (10)", price: 12 }
    ];

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
            <div className="itemSection">
                <p className="sectionName">Feeding ${total}</p>
                <ul className="itemList threeColumns">
                    {feedingItems.map(feedingItem => (
                        <li key={feedingItem.id}>
                            <p className="listItem">{feedingItem.item}</p>
                            <input
                                type="text"
                                defaultValue={feedingItem.price}
                                onChange={(e) => this.setNewPrice(e, feedingItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button 
                        className="formButtons" 
                        onClick={() => this.props.goPartBack("part4Total")}
                    >Back</button>

                    <button
                        className="formButtons"  
                        onClick={() => this.props.setPartTotalGoNext("part4Total", total)}
                    >Next</button>
                </div>
            </div>
        )
    }
}

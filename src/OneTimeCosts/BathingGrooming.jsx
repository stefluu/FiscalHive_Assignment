import React, { Component } from 'react';

export default class BathingGrooming extends Component {
   constructor(props) {
        super(props);
        this.total = 72;
        this.state = {
            n1: 16,
            n2: 20,
            n3: 15,
            n4: 10,
            n5: 8,
            n6: 3
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

    let bathingGroomingItems = [
      { id: "bg1", item: "Baby towel with hood (2)", price: 16 },
      { id: "bg2", item: "Infant bathtub", price: 20 },
      { id: "bg3", item: "Tub for older baby", price: 15 },
      { id: "bg4", item: "Baby washcloths (5)", price: 10 },
      { id: "bg5", item: "Brush and comb", price: 8 },
      { id: "bg6", item: "Baby nail clippers", price: 3 }
    ];

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
            <div className="itemSection">
                <p className="sectionName">Bathing/Grooming ${total}</p>
                <ul className="itemList threeColumns">
                    {bathingGroomingItems.map(bathingGroomingItem => (
                        <li key={bathingGroomingItem.id}>
                            <p className="listItem">{bathingGroomingItem.item}</p>
                            <input
                                type="text"
                                defaultValue={bathingGroomingItem.price}
                                onChange={(e) => this.setNewPrice(e, bathingGroomingItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button 
                        className="formButtons" 
                        onClick={() => this.props.goPartBack("part6Total")}
                    >Back</button>

                    <button 
                        className="formButtons" 
                        onClick={() => this.props.setPartTotalGoNext("part6Total", total)}
                    >Next</button>
                </div>
            </div>
        )
    }
}

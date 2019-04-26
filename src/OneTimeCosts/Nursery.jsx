import React, { Component } from 'react';

export default class Nursery extends Component {
    constructor(props) {
        super(props);
        this.total = 1703;
        this.state = {
            n1: 230,
            n2: 120,
            n3: 230,
            n4: 100,
            n5: 165,
            n6: 25,
            n7: 64,
            n8: 150,
            n9: 30,
            n10: 250,
            n11: 40,
            n12: 150,
            n13: 99,
            n14: 50
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

        let nurseryItems = [
            { id: "n1", item: "Crib ($120 - $850)", price: 230 },
            { id: "n2", item: "Changing table ($80 - $250)", price: 120 },
            { id: "n3", item: "Glider or rocker ($189 - $600)", price: 230 },
            { id: "n4", item: "Bassinet ($50 - $260)", price: 100 },
            { id: "n5", item: "Co-sleeper ($130 - $200)", price: 165 },
            { id: "n6", item: "Hamper ($20 - $60)", price: 25 },
            { id: "n7", item: "Basic bedding and blankets", price: 64 },
            { id: "n8", item: "Coordinated crib bedding set ($50 - $600)", price: 150 },
            { id: "n9", item: "Mobile ($20 - $55)", price: 30 },
            { id: "n10", item: "Dresser ($80 - $500)", price: 250 },
            { id: "n11", item: "Lamp ($24 - $70)", price: 40 },
            { id: "n12", item: "Decorations", price: 150 },
            { id: "n13", item: "Crib mattress ($60 - $140)", price: 99 },
            { id: "n14", item: "Baby monitor ($40 - $60)", price: 50 }
        ];

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
            <div className="itemSection">
                <p className="sectionName">Nursery ${total}</p>
                <ul className="itemList threeColumns">
                    {nurseryItems.map(nurseryItem => (
                        <li key={nurseryItem.id}>
                            <p className="listItem">{nurseryItem.item}</p>
                            <input
                                type="text"
                                defaultValue={nurseryItem.price}
                                onChange={(e) => this.setNewPrice(e, nurseryItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button
                        className="formButtons" 
                        onClick={() => this.props.goPartBack("part3Total")}
                    >Back</button>

                    <button
                        className="formButtons" 
                        onClick={() => this.props.setPartTotalGoNext("part3Total", total)}
                    >Next</button>
                </div>
            </div>
        )
    }
}

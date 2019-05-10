import React, { Component } from 'react';

export default class Other extends Component {


     constructor(props) {
        super(props);
        this.total = this.props.data.total;
        this.state = this.props.data.categoriesState;
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
        let otherItems = Object.values(this.props.data.items);

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


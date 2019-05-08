import React, { Component } from 'react';

export default class ItemSection extends Component {
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

    render() {
        let sectionName = this.props.sectionName;
        let refName = this.props.refName;

        let sectionItems = Object.values(this.props.data.items);
        let total = 0;
        for (let i in sectionItems) {
            total += sectionItems[i].price;
        };

        return (
            <div className="itemSection">
                <p className="sectionName">{sectionName}{total}</p>
                <ul className="itemList threeColumns" id="maybeThree">
                    {sectionItems.map(currentItem => (
                        <li key={currentItem.id}>
                            <p className="listItem">{currentItem.item}</p>
                            <input
                                type="text"
                                defaultValue={currentItem.price}
                                onChange={e => this.setNewPrice(e, currentItem.id)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="buttons">
                    <button
                        className="formButtons"
                        onClick={() => this.props.goPartBack(refName)}
                    >Back</button>

                    <button
                        className="formButtons"
                        onClick={() => this.props.setPartTotalGoNext(refName, total)}
                    >Next</button>
                </div>
            </div>
        );
    }
}

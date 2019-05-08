import React, { Component } from 'react';

export default class ItemSection extends Component {
    constructor(props) {
        super(props);
        this.total = this.props.data.total;
        this.state = this.props.data.categoriesState;
        this.threeCol = this.props.threeCol;
    }

    setNewPrice = (e, itemId) => {
        if (e.target.value) {
            this.setState({ [itemId]: parseInt(e.target.value) });
        } else {
            this.setState({ [itemId]: 0 });
        };
    };

    // makeThreeCol = () => {
    //     let threeList = ["Nursery $"];
    //     if(threeList.includes(this.props.sectionName)) {
    //         document.getElementById("maybeThree").className = "itemList threeColumns";
    //     } 
    // }

    render() {
        let sectionName = this.props.sectionName;
        let refName = this.props.refName;
        
        // debugger
        // if(this.threeCol) {
        //     this.makeThreeCol();
        //     this.threeCol = false;
        // }

        let sectionItems = Object.values(this.props.data.items);
        console.log(sectionItems)
        let total = 0;
        for (let i in sectionItems) {
            total += sectionItems[i].price;
        };

        return (
            <div className="itemSection">
                <p className="sectionName">{sectionName}{total}</p>
                <ul className="itemList" id="maybeThree">
                    {sectionItems.map(item => (
                        <li key={item.id}>
                            <p className="listItem">{item.item}</p>
                            <input
                                type="text"
                                defaultValue={item.price}
                                onChange={e => this.setNewPrice(e, item.id)}
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

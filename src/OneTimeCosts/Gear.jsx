import React, { Component } from 'react';

export default class Gear extends Component {
    constructor(props){
        super(props);
        this.total = this.props.data.total;
        this.state = this.props.data.categoriesState;
    } 

    setNewPrice = (e, itemId) => {
        if(e.target.value){
            this.setState({[itemId]: parseInt(e.target.value)});
        } else {
            this.setState({[itemId]: 0});
        };
    };

    goBackToOngoing = () => {
      this.props.goPartBack("part1Total");
      this.props.goBack();
    }

  render() {
    let gearItems = Object.values(this.props.data.items);

      let total = 0;
      for(let i in this.state){
          total += this.state[i];
      };

    return (
      <div className="itemSection">
        <p className="sectionName">Gear ${total}</p>
        <ul className="itemList">
          {gearItems.map(gearItem => (
            <li key={gearItem.id}>
              <p className="listItem">{gearItem.item}</p>
              <input
                type="text"
                defaultValue={gearItem.price}
                onChange={e => this.setNewPrice(e, gearItem.id)}
              />
            </li>
          ))}
        </ul>

        <div className="buttons">
          <button
            className="formButtons" 
            onClick={() => this.goBackToOngoing()}
            >Back</button>

          <button 
            className="formButtons"
            onClick={() => this.props.setPartTotalGoNext("part1Total", total)}
            >Next</button>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Data from '../AllData';

export default class Gear extends Component {
    constructor(props){
        super(props);
        this.total = 1124;
        this.state = {
            g1: 100,
            g2: 139,
            g3: 129,
            g4: 159,
            g5: 50,
            g6: 180,
            g7: 79,
            g8: 140,
            g9: 59,
            g10: 39,
            g11: 50
        }
    } 

    componentDidMount(){
      console.log(Data);
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

      let gearItems = [
          { id: "g1", item: "Infant car seat ($60 - $150)", price: 100 },
          { id: "g2", item: "Convertible car seat ($80 - $300)", price: 139 },
          { id: "g3", item: "Basic stroller ($70 - $900)", price: 129 },
          { id: "g4", item: "Double stroller ($100 - $300)", price: 159 },
          { id: "g5", item: "'Snap-on 'stroller frame($40 - $90)", price: 50 },
          { id: "g6", item: "Jogging stroller ($100 - $300)", price: 180 },
          { id: "g7", item: "Play yard ($59 - $150)", price: 79 },
          { id: "g8", item: "Baby backpack ($40 - $300)", price: 140 },
          { id: "g9", item: "Front carrier ($25 - $120)", price: 59 },
          { id: "g10", item: "Sling or wrap carrier ($29 - $60)", price: 39 },
          { id: "g11", item: "Diaper bag ($25 - $200)", price: 50 }
      ];

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

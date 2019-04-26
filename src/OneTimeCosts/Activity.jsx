import React, { Component } from 'react';

export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.total = 310;
        this.state = {
            a1: 100,
            a2: 40,
            a3: 80,
            a4: 50,
            a5: 40,
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

        let activityItems = [
            { id: "a1", item: "Swing ($85 - $120)", price: 100 },
            { id: "a2", item: "Bouncer/bouncy seat ($30 - $70)", price: 40 },
            { id: "a3", item: "Activity center ($70 - $80)", price: 80 },
            { id: "a4", item: "Play mat/gym ($25 - $80)", price: 50 },
            { id: "a5", item: "Doorway jumper ($30 - $40)", price: 40 }
        ];

        let total = 0;
        for (let i in this.state) {
            total += this.state[i];
        };

        return (
          <div className="itemSection">
            <p className="sectionName">Activity Equipment ${total}</p>
            <ul className="itemList">
              {activityItems.map(activityItem => (
                <li key={activityItem.id}>
                  <p className="listItem">{activityItem.item}</p>
                  <input
                    type="text"
                    defaultValue={activityItem.price}
                    onChange={e => this.setNewPrice(e, activityItem.id)}
                  />
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button 
                className="formButtons"
                onClick={() => this.props.goPartBack("part2Total")}
              >Back</button>

              <button 
                className="formButtons"
                onClick={() => this.props.setPartTotalGoNext("part2Total", total)}
              >Next</button>
            </div>
          </div>
        );
    }
}

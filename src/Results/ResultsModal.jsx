import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

class ResultsModal extends Component {
  state = {
    redirect: false
  }

  setRedirect = () => {
    this.setState({redirect: true});
  };

  render() {
    let onGoingTotal = this.props.finalState.ongoingTotal;
    let oneTimeTotal = this.props.finalState.oneTimeTotal;
    let totalCost = onGoingTotal + oneTimeTotal;

    if(this.state.redirect){
      
      return <Redirect push to={{
        pathname: "/results",
        state: {finalState: this.props.finalState, total: totalCost}
      }}></Redirect>

    } else {
      return (
        <div className="resultModal">
          <div className="resultModalh4Container">
            <h4>
              Subtotal of Ongoing Costs: ${onGoingTotal}
            </h4>
            <h4>
              Subtotal of One-Time Costs: ${oneTimeTotal}
            </h4>
          </div>

          <div>
            <h1>Your baby's first year will cost:</h1>
            <h1>${totalCost}</h1>

          </div>

          <button
            className="formButtons goToDetailed"
            onClick={this.setRedirect}
          >See Detailed Breakdown</button>
        </div>
      );

    }
  }
}

export default withRouter(ResultsModal)
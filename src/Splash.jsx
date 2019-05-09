import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Form from './Form';

export default class Splash extends Component {
  state = {
      modal: false
  }

    onOpenModal = () => {
        this.setState({ modal: true });
    };

    onCloseModal = () => {
        this.setState({ modal: false });
    };

  render() {
    const modalStyle = {
      modal: {
        borderRadius: "5px",
        fontFamily: "Merriweather, serif"
      }
    }
    return (
      <div className="splashDiv">
        <h1>First-Year Baby Costs Calculator</h1>
        <p>There is a lot that goes into prepping for a baby's arrival, including a lot of financial planning.</p>
        <p>Click on "Let's Plan!" to get started in financially planning for your baby's first year.</p>
        <p>Please note we've made pre-filled some inputs for you, based on our research and an exclusive BabyCenter survey of more than 1,000 new moms. 
            Feel free to change our pre-filled amount to customize this tool for yourself!</p>

        <button 
            className="getStarted"
            onClick = {this.onOpenModal}
        >Let's Plan!
        </button>

        <Modal 
          open={this.state.modal} 
          onClose={this.onCloseModal} 
          styles={modalStyle}
          center>
            <Form closeModal={this.onCloseModal.bind(this)}/>
        </Modal>
        
      </div>
    )
  }
}

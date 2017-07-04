
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Signup from './Signup';
import Login from './Login';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps() {
    this.setState({
      login: this.props.login
    })
  }

  switchPage() {
    this.setState({
      login: !this.state.login,
    })
  }

  render() {
      return (
        <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-lg">
          <Modal.Body>
             {this.state.login ? (<Login toggleLogin={this.props.toggleLogin.bind(null)}/>) : (<Signup toggleLogin={this.props.toggleLogin.bind(null)}/>)} 
             <p className="switchLogin">{this.state.login ? 'New?' : "Already have an account?"} <a className="Link" onClick={this.switchPage.bind(this)}>{this.state.login ? "Sign up!" : "Log-in!"}</a></p>
          </Modal.Body>
        </Modal>
      );
    }
}
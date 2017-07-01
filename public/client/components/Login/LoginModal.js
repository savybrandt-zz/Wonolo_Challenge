
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

  render() {
      return (
        <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-lg">
          <Modal.Body>
             {this.props.login ? (<Login />) : (<Signup />)} 
          </Modal.Body>
        </Modal>
      );
    }
}
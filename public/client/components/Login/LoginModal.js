
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-lg">
          <Modal.Body>
            {this.props.body}
          </Modal.Body>
        </Modal>
      );
    }
}
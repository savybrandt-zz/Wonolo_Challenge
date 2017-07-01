import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginModal from "./LoginModal.js";
import Login from "./Login";
import Signup from "./Signup"

export default class LoginButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getInitialState() {
    return { show: false};
  }

  render() {
    let close = () => this.setState({ show: false });

    return (
      <ButtonToolbar>
        <Button bsStyle="warning" onClick={()=>this.setState({ show: true, body: <Signup/> })}>
          Sign up
        </Button>
        <Button bsStyle="link" onClick={()=>this.setState({ show: true, body: <Login/>})}>
          Login
        </Button>

        <LoginModal show={this.state.show} onHide={close} body={this.state.body}/>
      </ButtonToolbar>
    );
  }}
import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';
import LoginModal from "./LoginModal.js";

export default class LoginButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getInitialState() {
    return { 
    	show: false, 
    	login: false
    };
  }

  render() {
    let close = () => this.setState({ show: false });

    return (
      <ButtonToolbar>
        <Button className="yellow" onClick={()=>this.setState({ show: true, login: false })}>
          Sign up
        </Button>
        <Button bsStyle="link" className="Link" onClick={()=>this.setState({ show: true, login: true })}>
          Login
        </Button>
        <LoginModal show={this.state.show} onHide={close} login={this.state.login} toggleLogin={this.props.toggleLogin.bind(null)}/>
      </ButtonToolbar>
    );
  }}
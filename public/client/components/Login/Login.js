import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		console.log('email: ', e.target.value)
		this.setState({
			email: e.target.value
		})
	}

	render() {
		return (
				<div className="Login">
					<h1>Login</h1>
					  <Form horizontal>
					    <FormGroup controlId="Email">
					      <Col componentClass={ControlLabel} sm={2}>
					        Email
					      </Col>
					      <Col sm={10}>
					        <FormControl type="email" onChange={this.handleChange} placeholder="Email" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="Password">
					      <Col componentClass={ControlLabel} sm={2}>
					        Password
					      </Col>
					      <Col sm={10}>
					        <FormControl type="password" placeholder="Password" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Checkbox>Remember me</Checkbox>
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col smOffset={2} sm={10}>
					        <Button className="yellow" type="submit" onClick={this.props.toggleLogin.bind(null, this.state.email)}>
					          Sign in
					        </Button>
					      </Col>
					    </FormGroup>
					  </Form>
				</div>
			)
	}
}
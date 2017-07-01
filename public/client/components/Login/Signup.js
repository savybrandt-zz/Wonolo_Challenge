import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button, Radio } from 'react-bootstrap';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
				<div className="Signup">
					<h1>Signup</h1>
					  <Form horizontal>

					    <FormGroup controlId="formHorizontalEmail">
					      <Col componentClass={ControlLabel} sm={2}>
					        I am a...
					      </Col>
					      <Col sm={10}>
					      <Radio name="radioGroup" inline>
							      Job Seaker
							    </Radio>
							    {' '}
							    <Radio name="radioGroup" inline>
							      Business
							    </Radio>
							    {' '}
					      </Col>
					    </FormGroup>


					    <FormGroup controlId="formHorizontalEmail">
					      <Col componentClass={ControlLabel} sm={2}>
					        Email
					      </Col>
					      <Col sm={10}>
					        <FormControl type="email" placeholder="Email" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="formHorizontalPassword">
					      <Col componentClass={ControlLabel} sm={2}>
					        Password
					      </Col>
					      <Col sm={10}>
					        <FormControl type="password" placeholder="Password" />
					      </Col>
					    </FormGroup>

					    <FormGroup controlId="formHorizontalPassword">
					      <Col componentClass={ControlLabel} sm={2}>
					        Confirm Password
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
					        <Button className="yellow" type="submit">
					          Sign up
					        </Button>
					      </Col>
					    </FormGroup>
					  </Form>
				</div>
			)
	}
}
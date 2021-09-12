import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
export default class Filter extends Component {
	render() {
		return (
			<Row>
				<Col md={4}>{this.props.count} products found</Col>
				<Col md={4}></Col>
				<Col md={4}></Col>
			</Row>
		)
	}
}

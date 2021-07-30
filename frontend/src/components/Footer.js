import React from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import { Button } from '@material-ui/core'
const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='my-5'>
					<Col sm={12} md={6} lg={4}>
						<h4 className='my-3'>Contact Us</h4>

						<h7>
							<h5 className='my-3'> Address-</h5> 6 Ashok Vihar Colony Khurram
							Nagar Lucknow -226022, India
						</h7>

						<h7>
							<h5 className='my-3'>Phone-</h5> 9415010585
						</h7>
						<h7>
							<h5 className='my-3'>Email- </h5>srihanumantnursery@gmail.com
						</h7>
					</Col>
					<Col sm={12} md={6} lg={4}>
						<h4>Locate Us</h4>
					</Col>
					<Col sm={12} md={6} lg={4} className='my-5 py-5'>
						<Row>
							<Col sm={12} md={6} lg={4} className='my-2'>
								<Button>
									<i class='fab fa-facebook-f fa-3x'></i>
								</Button>
							</Col>
							<Col sm={12} md={6} lg={4} className='my-2'>
								<Button>
									<i class='fab fa-whatsapp fa-3x'></i>
								</Button>
							</Col>
							<Col sm={12} md={6} lg={4} className='my-2'>
								<Button>
									<i class='fab fa-instagram fa-3x'></i>
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<div align='center'>
				<h7>Copyright@Jadebox 2021</h7>
			</div>
		</footer>
	)
}

export default Footer

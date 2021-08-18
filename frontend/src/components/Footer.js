import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='my-3'>
					<Col sm={12} md={6} lg={4}>
						<h4 className='my-5' align='center'>
							Contact Us
						</h4>
						<Link to='/contactus'>
							<Button>
								<h5>Our Team</h5>
							</Button>
						</Link>
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
					<Col sm={12} md={6} lg={4} align='center'>
						<h4 className='my-5'> Locate Us</h4>

						<iframe
							title='Map'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.0612280611923!2d80.96671016409297!3d26.887378527477154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999573db3d78eb7%3A0xea0f409d9055cb2b!2sSri%20Hanumant%20Nursery!5e0!3m2!1sen!2sin!4v1628779164914!5m2!1sen!2sin'
							width='250'
							height='250'
							allowfullscreen=''
							loading='lazy'
						></iframe>
					</Col>

					<Col sm={12} md={6} lg={4}>
						<Row>
							<h4 className='my-5' align='center'>
								Socials
							</h4>

							<Row>
								<Col className='my-3' md={6} lg={6} align='center'>
									<Link>
										<Col>
											<i class='fab fa-instagram fa-3x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={6} align='center'>
									<Link>
										<Col>
											<i class='fab fa-facebook-f fa-3x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={6} align='center'>
									<Link>
										<Col>
											<i class='fab fa-whatsapp fa-3x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={6} align='center'>
									<a href='mailto:srihanumantnursery@gmail.com'>
										<i class='far fa-envelope fa-3x'></i>
									</a>
								</Col>
							</Row>
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

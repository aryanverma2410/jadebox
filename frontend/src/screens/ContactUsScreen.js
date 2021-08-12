import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ContactUsScreen = () => {
	return (
		<>
			<Container align='center'>
				<div>
					<h1 align='center' className='my-5'>
						Social Contacts
					</h1>
					<Row>
						<Col className='my-3' md={6} lg={3}>
							<Link>
								<Col>
									<i class='fab fa-instagram fa-3x'></i>
								</Col>
								<h8>@jadebox_21</h8>
							</Link>
						</Col>
						<Col className='my-3' md={6} lg={3}>
							<Link>
								<Col>
									<i class='fab fa-facebook-f fa-3x'></i>
								</Col>
								<h8>@jadebox_21</h8>
							</Link>
						</Col>
						<Col className='my-3' md={6} lg={3}>
							<Link>
								<Col>
									<i class='fab fa-whatsapp fa-3x'></i>
								</Col>
								<h8>+919140382988</h8>
							</Link>
						</Col>
						<Col className='my-3' md={6} lg={3}>
							<Link>
								<Col>
									<i class='far fa-envelope fa-3x'></i>
								</Col>

								<h8>srihanumantnursery@gmail.com</h8>
							</Link>
						</Col>
						<p className='py-5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
							eget mi proin sed libero enim sed faucibus turpis. Massa sapien
							faucibus et molestie. Molestie at elementum eu facilisis sed odio
							morbi quis. Nunc mattis enim ut tellus elementum sagittis. Id
							venenatis a condimentum vitae sapien pellentesque habitant morbi.
							Proin sed libero enim sed faucibus turpis in eu. Lorem sed risus
							ultricies tristique nulla aliquet enim tortor at. Consectetur
							purus ut faucibus pulvinar elementum integer enim neque volutpat.
							Euismod elementum nisi quis eleifend quam adipiscing vitae proin.
							Nulla facilisi nullam vehicula ipsum a arcu. At risus viverra
							adipiscing at in tellus integer feugiat scelerisque. Senectus et
							netus et malesuada fames ac turpis egestas. Tincidunt eget nullam
							non nisi est sit amet. Convallis tellus id interdum velit laoreet.
							Id semper risus in hendrerit.
						</p>
					</Row>
				</div>

				<div align='center'>
					<Image
						src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
						fluid
						width={20}
					></Image>
				</div>
				<h1 align='center' className='my-5'>
					Our Team
				</h1>
				<s1>Developers</s1>
				<Row className='my-5'>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-code fa-2x'></i>
								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-code fa-2x'></i>

								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
				<s1>Designers</s1>
				<Row className='my-5'>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-palette fa-2x'></i>
								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-palette fa-2x'></i>

								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
				<s1>Photography</s1>
				<Row className='my-5'>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-camera-retro fa-2x'></i>
								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-camera-retro fa-2x'></i>

								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
				<s1>Server And Google Analytics</s1>
				<Row className='my-5'>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-server fa-2x'></i>
								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-server fa-2x'></i>

								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
				<s1>Writing</s1>
				<Row className='my-5'>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-feather fa-2x'></i>
								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={6}>
						<Row>
							<Col xs={12}>
								<i class='fas fa-feather fa-2x'></i>

								<Image></Image>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default ContactUsScreen

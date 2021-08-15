import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
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

				<h1 className='my-5'>Tech Used</h1>
				<div>
					<Row className='my-5'>
						<Col className='my-3'>
							<Image src='/uploads/illustrator.svg' width='80'></Image>
							<h5>Adobe Illustrator</h5>
						</Col>
						<Col className='my-3'>
							<i class='fab fa-node fa-5x'></i>
							<h5 className='my-4'>NodeJs</h5>
						</Col>

						<Col className='my-3'>
							<i class='fas fa-database fa-5x'></i>
							<h5 className='my-4'>MongoDb</h5>
						</Col>
						<Col className='my-3'>
							<i class='fab fa-react fa-5x '></i>
							<h5 className='my-4'>ReactJs</h5>
						</Col>

						<Col className='my-3'>
							<i class='fas fa-server fa-5x'></i>
							<h5 className='my-4'>NGINX</h5>
						</Col>

						<Col className='my-3'>
							<i class='fab fa-figma fa-5x'></i>
							<h5 className='my-4'>Figma</h5>
						</Col>
						<Col className='my-3'>
							<Image src='/uploads/photoshop.svg' width='80'></Image>
							<h5>Adobe Photoshop</h5>
						</Col>
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
				<div>
					<Row>
						<Col s={12} md={6} className='py-5'>
							<h1>Srishti Mittal</h1>
							<s3>UI/UX Designer</s3>
							<p className='my-4'>
								I design products and pieces, make art and watch anime. I am
								fond of note-taking, moodboards and pressed flowers. I like to
								experiment in my work and design things which bring some value
								to someone’s life.
							</p>
							<Row className='my-5'>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname:
												'https://instagram.com/rain_and_moss?utm_medium=copy_link',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-instagram fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname:
												'https://www.facebook.com/profile.php?id=100010617643042',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-facebook-f fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname: 'https://www.linkedin.com/in/srishtayyye',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-linkedin-in fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<a href='mailto:srishtimittal726@gmail.com'>
										<i class='far fa-envelope fa-2x'></i>
									</a>
								</Col>
							</Row>
							<Row>
								<s2 className='my-3'>Skills Used</s2>
								<Col>
									<i class='fab fa-figma fa-4x'></i>
								</Col>

								<Col>
									<Image src='\uploads\illustrator.svg' width='70'></Image>
								</Col>
								{/* <Col>
									<Image src='\uploads\writing.svg' width='50'></Image>
								</Col>

								<Col>
									<Image src='\uploads\illustrator.svg' width='50'></Image>
								</Col> */}
							</Row>
						</Col>
						<Col className='my-5' s={12} md={6}>
							<Image
								src='https://ik.imagekit.io/jadebox/shristi_2_U0mFZnIVj.jpeg?updatedAt=1628784652632'
								width='500'
								fluid
							></Image>
						</Col>
					</Row>
					<div align='center' className='my-5 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
					<Row>
						<Col className='my-5' s={12} md={6}>
							<Image
								src='https://ik.imagekit.io/jadebox/shrasti_pnXxeKQGHlS.jpg?updatedAt=1628762258076'
								width='400'
								fluid
							></Image>
						</Col>
						<Col s={12} md={6} className='py-5'>
							<h1>Shrasti Sanjay Shukla</h1>
							<s3>Logo Designer & Writer</s3>
							<p className='my-4'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								ut urna diam. Mauris ac tellus ut est semper sagittis non
								tristique tortor. Sed quis euismod nulla. Donec ullamcorper
								tortor non iaculis ornare. Proin dictum sapien vel lacus
								molestie sodales. Donec neque tellus, vulputate vel augue
								dignissim, condimentum viverra elit.
							</p>
							<Row className='my-5'>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname:
												'https://instagram.com/_.sss18._?utm_medium=copy_link',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-instagram fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname: 'https://www.facebook.com/shrasti.shukla',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-facebook-f fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<Link
										to={{
											pathname:
												'https://www.linkedin.com/in/shrasti-shukla-22a08b1b5',
										}}
										target='_blank'
									>
										<Col>
											<i class='fab fa-linkedin-in fa-2x'></i>
										</Col>
									</Link>
								</Col>
								<Col className='my-3' md={6} lg={3}>
									<a href='mailto:shrasti101@gmail.com'>
										<i class='far fa-envelope fa-2x'></i>
									</a>
								</Col>
							</Row>
							<Row>
								<s2 className='my-3'>Skills Used</s2>
								<Col>
									<Image src='\uploads\writing.svg' width='65'></Image>
								</Col>

								<Col>
									<Image src='\uploads\illustrator.svg' width='70'></Image>
								</Col>
								{/* <Col>
									<Image src='\uploads\writing.svg' width='50'></Image>
								</Col>

								<Col>
									<Image src='\uploads\illustrator.svg' width='50'></Image>
								</Col> */}
							</Row>
						</Col>
					</Row>
					<div align='center' className='my-5 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
				</div>
			</Container>
		</>
	)
}

export default ContactUsScreen

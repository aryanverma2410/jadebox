import React from 'react'
import { Col, Row, Image, Container } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
const handleDragStart = (e) => e.preventDefault()
const responsive = {
	0: { items: 1 },
	767: { items: 2 },
	1023: { items: 3 },
}

const items = [
	<div className='item' data-value='1'>
		<Link to='/home'>
			<Button>
				<Image
					src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
					width='300'
				></Image>
			</Button>
		</Link>
	</div>,
	<div className='item' data-value='2'>
		<Link to='/home'>
			<Button>
				<Image
					src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
					width='300'
				></Image>
			</Button>
		</Link>
	</div>,
	<div className='item' data-value='3'>
		<Link to='/home'>
			<Button>
				<Image
					src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
					width='300'
				></Image>
			</Button>
		</Link>
	</div>,
	<div className='item' data-value='4'>
		<Link to='/home'>
			<Button>
				<Image
					src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
					width='300'
				></Image>
			</Button>
		</Link>
	</div>,
	<div className='item' data-value='5'>
		<Link to='/home'>
			<Button>
				<Image
					src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
					width='300'
				></Image>
			</Button>
		</Link>
	</div>,
]
const LandingScreen = () => {
	return (
		<>
			<Container>
				<Row>
					<Col xs={12} s={12} m={6} lg={6}>
						<div className='main-page-line'>
							<Row>
								<e1>A perfect gift for</e1>
							</Row>
							<Row>
								<c1>everyone</c1>
							</Row>
							<Row>
								<s2>
									Shop your favourites plants or gift them to your loved ones.
								</s2>
							</Row>
						</div>
						<Image
							src='https://ik.imagekit.io/jadebox/cristina-carrillo-gRL51XF4NWM-unsplash_aLl1qEufz.jpg?updatedAt=1627201193139'
							fluid
							className='main-page-pic'
						></Image>

						<Col>
							<Link to='/home'>
								<Button class='btn-custom-cont'>Gift Someone</Button>
							</Link>
							<Link to='/home'>
								<Button class='btn-custom-out'>Explore The Plant World</Button>
							</Link>
						</Col>
						<Row className='my-5'>
							<Col xs={12}>
								<Col>
									<s2>Presented By</s2>
								</Col>
								<e5>Sri Hanumant Nursery</e5>
							</Col>
						</Row>
					</Col>
					<Col xs={12} s={12} md={12} lg={6}>
						<Image
							src='https://ik.imagekit.io/jadebox/cristina-carrillo-gRL51XF4NWM-unsplash_aLl1qEufz.jpg?updatedAt=1627201193139'
							fluid
							className='main-page-pic-2'
						></Image>
					</Col>
				</Row>
			</Container>
			<Container>
				<div align='center' className='my-5 '>
					<Image
						src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
						fluid
						width={20}
					></Image>
				</div>
				<e2>View Our Collection</e2>
				<div className='my-5 '>
					<AliceCarousel
						mouseTracking
						items={items}
						responsive={responsive}
						controlsStrategy='responsive'
						autoPlay
						infinite
						disableDotsControls
						keyboardNavigation
						autoPlayInterval={3000}
						mouseTracking
					/>
				</div>
				{/* <Row className='my-5'>
					<Col xs={12} s={6} md={4} lg={3} className='my-5'>
						<Image
							src='https://ik.imagekit.io/jadebox/art-and-soil-bangalore-I5ofzP2nICE-unsplash_JHIDJUHfg.jpg?updatedAt=1628835637049'
							fluid
						></Image> */}
				{/* <Row>
							<Col>
								<s4>Plant Name</s4>
							</Col>
							<Col align='right'>
								<s4>Rs 400</s4>
							</Col>
						</Row> */}
				{/* </Col>
					<Col xs={12} s={6} md={4} lg={3} className='my-5'>
						<Image
							src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
							fluid
						></Image>
					</Col>
					<Col xs={12} s={6} md={4} lg={3} className='my-5'>
						<Image
							src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
							fluid
						></Image>
					</Col>
					<Col xs={12} s={6} md={4} lg={3} className='my-5'>
						<Image
							src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
							fluid
						></Image>
					</Col>
					<div align='center' className='my-5 '>
						<Link to='/home'>
							{' '}
							
						</Link>
					</div>
				</Row> */}
				<div align='center' className='my-5'>
					<Link to='/home'>
						{' '}
						<Button className='btn-out-primary'>
							<h5>View All</h5>
						</Button>
					</Link>
				</div>
			</Container>

			<Container>
				<Col className='my-4'>
					<e2>Want to know the journey of the plants?</e2>
				</Col>
				<Col>
					<s3>From our greenhouse to your</s3>
				</Col>
				<div>
					<u1>house</u1>
					<div class='box-top'>
						<div class='box-top-left'>
							<Col sm={4} align='right' className='main-story'>
								<Image
									src='https://ik.imagekit.io/jadebox/cristina-carrillo-gRL51XF4NWM-unsplash_aLl1qEufz.jpg?updatedAt=1627201193139'
									fluid
									width='300'
								></Image>
							</Col>
						</div>
						<div class='box-top-right'></div>
					</div>

					<div align='right'>
						<Row>
							<Col className='main-story-text '>
								<u3>At just the right time, we</u3>
								<u2> hand select </u2> <u3>your soul-plant and box it up</u3>
							</Col>

							<Col className='my-5'>
								<Image
									src='https://ik.imagekit.io/jadebox/mong-bui-NznxEfw9iVI-unsplash_FG58S6JsD.jpg?updatedAt=1627315757059'
									fluid
									width='300'
								></Image>
							</Col>
						</Row>
					</div>

					<div>
						<Row>
							<Col className='my-5'>
								<Image
									src='https://ik.imagekit.io/jadebox/kara-eads-xRyL63AwZFE-unsplash_jZHZEmS8e.jpg?updatedAt=1627318736471'
									fluid
									width='300'
								></Image>
							</Col>
							<Col className='main-story-text-2'>
								<u3>Your new</u3>
								<u2> best-friend </u2>
								<u3>arrives ready to fill your life with joy</u3>
							</Col>
						</Row>
					</div>
				</div>
				<Container>
					<Row className='my-5 '>
						<Col align='center' className='mx-5 px-5'>
							<Link to='/home'>
								<div className='my-4'>
									<Image
										src='https://ik.imagekit.io/jadebox/stephanie-harvey-f7PfM2NklZ4-unsplash_a282yQ-gQ.jpg?updatedAt=1627315814373'
										fluid
										width='200'
									></Image>
								</div>
							</Link>
							<LinkContainer to='/home'>
								<u4>Shop Online</u4>
							</LinkContainer>
						</Col>

						<Col align='center' className='mx-5 px-5'>
							<Link to='/home'>
								<div className='my-4'>
									<Image
										src='https://ik.imagekit.io/jadebox/stephanie-harvey-f7PfM2NklZ4-unsplash_a282yQ-gQ.jpg?updatedAt=1627315814373'
										fluid
										width='200'
									></Image>
								</div>
							</Link>
							<LinkContainer to='/home'>
								<u4>Shop in-store</u4>
							</LinkContainer>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	)
}

export default LandingScreen

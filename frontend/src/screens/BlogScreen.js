import { Container } from '@material-ui/core'
import { Row, Col, Image } from 'react-bootstrap'

const BlogScreen = () => {
	return (
		<Container>
			<ol class='breadcrumb'>
				<li class='breadcrumb-item'>
					<a href='#'>
						<s5>Home</s5>
					</a>
				</li>
				<li class='breadcrumb-item'>
					<a href='home'>
						<s5>Catalogue</s5>
					</a>
				</li>
				<li class='breadcrumb-item active'>
					<s5>Blog</s5>
				</li>
			</ol>
			<Row className='my-5'>
				<Col sm='12' md='6 ' fluid>
					<h1 style={{ fontSize: '3rem' }}>
						TOP<br></br> PICK<br></br> ARTICLE
					</h1>
					<p>
						Nullam massa e, ornare vitae aliquam ac, feugiat at leo. Donec at
						ultrices turpis. Etiam a congue lorem. Duis est est, euismod eu
						finibus nec, laoreet a magna. Aenean sit amet augue mollis dui
						mattis vestibulum. Praesent auctor mi sed ultrices tristique.
						Vivamus consequat ex lorem, sed lacinia risus malesuada vitae.
						Quisque elementum ultricies imperdiet. Curabitur vehicula felis a
						lacinia cursus.
					</p>

					<a href='atricle1'>
						<h5>Read More</h5>
					</a>
				</Col>
				<Col sm='12' md='12' lg='6' className='my-3'>
					<Image
						src='https://ik.imagekit.io/jadebox/evie-s-uF2j60rp6Rs-unsplash_i4YrYur_c.jpg?updatedAt=1629726671156'
						fluid
					></Image>
				</Col>
			</Row>
			<div className='atricle1'>
				<p></p>
			</div>
			<div align='center' className='my-5 '>
				<Image
					src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
					fluid
					width={20}
				></Image>
			</div>
			<Row>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
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
				<Col lg='3 ' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
				<Col lg='3' md='4' className='my-2'>
					<Image
						src='https://ik.imagekit.io/jadebox/mockup-graphics-sgtNUknCo3E-unsplash_SxFWyT1lx.jpg?updatedAt=1629729397580'
						fluid
					></Image>
				</Col>
			</Row>
		</Container>
	)
}

export default BlogScreen

import { Container } from '@material-ui/core'
import { display } from '@material-ui/system'
import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const OurRoots = () => {
	return (
		<>
			<Container align='center'>
				{/* <Image
					src='https://ik.imagekit.io/jadebox/logo_atuzP2E8a1.png?updatedAt=1628751984969'
					className='my-3'
				></Image> */}
				<h1>JadeBox</h1>
				<s4>by Sri Hanumant Nursery</s4>
				<div align='center' className='my-4 '>
					<Image
						src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
						fluid
						width={20}
					></Image>
				</div>
				<Row>
					<Col xs={12} md={7}>
						<Image
							src='https://ik.imagekit.io/jadebox/freddie-marriage-UcfKYTan-LU-unsplash_VRiLMauSSwx.jpg?updatedAt=1628747769659'
							className='my-4'
							width='500'
							fluid
						></Image>
					</Col>
					<Col className='my-5'>
						<s1>What's in our heart?</s1>
						<p className='my-3'>
							There are many variations of passages of Lorem Ipsum available,
							but the majority have suffered alteration in some form, by
							injected humour, or randomised words which don't look even
							slightly believable. If you are going to use a passage of Lorem
							Ipsum, you need to be sure there isn't anything embarrassing
							hidden in the middle of text. All the Lorem Ipsum generators on
							the Internet tend to repeat predefined chunks as necessary, making
							this the first true generator on the Internet. It uses a
							dictionary of over 200 Latin words, combined with a handful of
							model sentence structures, to generate Lorem Ipsum which looks
							reasonable. The generated Lorem Ipsum is therefore always free
							from repetition, injected humour, or non-characteristic words etc.
						</p>
					</Col>
					<div align='center' className='my-3 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
				</Row>
				<Row>
					<Col className='my-5'>
						<s1>Join Us</s1>
						<p className='my-3'>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English. Many desktop
							publishing packages and web page editors now use Lorem Ipsum as
							their default model text, and a search for 'lorem ipsum' will
							uncover many web sites still in their infancy. Various versions
							have evolved over the years, sometimes by accident, sometimes on
							purpose (injected humour and the like).
						</p>
					</Col>
					<Col xs={12} md={7}>
						<Image
							src='https://ik.imagekit.io/jadebox/evie-s-TNacNuuEl1o-unsplash_zuU6HfsWC62.jpg?updatedAt=1628749113739'
							className='my-5'
							width='500'
							fluid
						></Image>
					</Col>
					<div align='center' className='my-5 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
				</Row>
				<Row>
					<Col xs={12}>
						<Image
							className='my-3'
							src='https://ik.imagekit.io/jadebox/samantha-gades-gKjLLN1T8HQ-unsplash_1__wiRziQike.jpg?updatedAt=1628749408366'
							fluid
							width='1000'
						></Image>
					</Col>
					<Col>
						<s1 className='my-3'>Join Us</s1>
						<p className='my-3 px-3'>
							"But I must explain to you how all this mistaken idea of
							denouncing pleasure and praising pain was born and I will give you
							a complete account of the system, and expound the actual teachings
							of the great explorer of the truth, the master-builder of human
							happiness. No one rejects, dislikes, or avoids pleasure itself,
							because it is pleasure, but because those who do not know how to
							pursue pleasure rationally encounter consequences that are
							extremely painful. Nor again is there anyone who loves or pursues
							or desires to obtain pain of itself, because it is pain, but
							because occasionally circumstances occur in which toil and pain
							can procure him some great pleasure. To take a trivial example,
							which of us ever undertakes laborious physical exercise, except to
							obtain some advantage from it? But who has any right to find fault
							with a man who chooses to enjoy a pleasure that has no annoying
							consequences, or one who avoids a pain that produces no resultant
							pleasure?"
						</p>
					</Col>
					<div align='center' className='my-5 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
				</Row>
				<Row>
					<Col xs={12}>
						<s1 className='my-3'>Join Us</s1>
						<p className='my-3 px-3'>
							"But I must explain to you how all this mistaken idea of
							denouncing pleasure and praising pain was born and I will give you
							a complete account of the system, and expound the actual teachings
							of the great explorer of the truth, the master-builder of human
							happiness. No one rejects, dislikes, or avoids pleasure itself,
							because it is pleasure, but because those who do not know how to
							pursue pleasure rationally encounter consequences that are
							extremely painful. Nor again is there anyone who loves or pursues
							or desires to obtain pain of itself, because it is pain, but
							because occasionally circumstances occur in which toil and pain
							can procure him some great pleasure. To take a trivial example,
							which of us ever undertakes laborious physical exercise, except to
							obtain some advantage from it? But who has any right to find fault
							with a man who chooses to enjoy a pleasure that has no annoying
							consequences, or one who avoids a pain that produces no resultant
							pleasure?"
						</p>
					</Col>
					<Col>
						<Image
							className='my-3'
							src='https://ik.imagekit.io/jadebox/priscilla-du-preez-bqA4nuOPcjM-unsplash_KuSx6Od8Rke.jpg?updatedAt=1628750096474'
							fluid
							width='1000'
						></Image>
					</Col>
					<div align='center' className='my-5 '>
						<Image
							src='https://ik.imagekit.io/jadebox/Vector_yBwVInDn_.png?updatedAt=1627316189474'
							fluid
							width={20}
						></Image>
					</div>
				</Row>
			</Container>
		</>
	)
}

export default OurRoots

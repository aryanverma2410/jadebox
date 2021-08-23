import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import AspectRatio from 'react-aspect-ratio'
const Product = ({ product }) => {
	return (
		<>
			<Card className='my-3 px-1 py-1 rounded' style={{ height: '20rem' }}>
				{' '}
				<Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
					<div className='img-wrapper'>
						<AspectRatio ratio='4/3' style={{ maxHeight: '200px' }}>
							<img
								src={product.image}
								variant='top'
								className='hover-zoom'
								alt='Product'
							/>
						</AspectRatio>
					</div>
				</Link>{' '}
				<Card.Body>
					<Card.Text>
						<Row>
							<Col sm={12} md={8}>
								{
									/* <Rating
						value={product.rating}
						text={`${product.numReviews} reviews.`}
						
					/> */
									<h8>{product.name}</h8>
								}
							</Col>
							<Col sm={12} md={4} align='right'>
								<h8>₹ {product.price}</h8>
							</Col>
						</Row>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default Product

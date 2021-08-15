import React, { useState, useEffect } from 'react'
import Product from '../components/Product'

import { useDispatch, useSelector } from 'react-redux'
import {
	Row,
	Col,
	ListGroup,
	Form,
	Figure,
	Container,
	Image,
	ButtonGroup,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import {
	listProductDetails,
	createProductReview,
} from '../actions/productActions.js'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import { createProductWishlist, getUserDetails } from '../actions/userActions'
import { Button } from '@material-ui/core'
// import { listPackaging } from '../actions/packagingActions'
// import { savePackagingType } from '../actions/cartActions'

const ProductPageScreen = ({ history, match }) => {
	const [qty, setQty] = useState(1)

	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState('')

	const dispatch = useDispatch()

	const productDetails = useSelector((state) => state.productDetails)
	const { loading, error, product } = productDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const productReviewCreate = useSelector((state) => state.productReviewCreate)
	const {
		success: successProductReview,
		loading: loadingProductReview,
		error: errorProductReview,
	} = productReviewCreate
	const userWishlistCreate = useSelector((state) => state.userWishlistCreate)
	const {
		success: successUserWishlist,
		loading: loadingUserWishlist,
		error: errorUserWishlist,
	} = userWishlistCreate

	const userDetails = useSelector((state) => state.userDetails)
	const { user } = userDetails

	useEffect(() => {
		if (successProductReview) {
			setRating(0)
			setComment('')
		}
		if (!product._id || product._id !== match.params.id) {
			dispatch(listProductDetails(match.params.id))
			dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
		}
		dispatch(listProductDetails(match.params.id))
		dispatch(getUserDetails('profile'))
	}, [dispatch, match, successProductReview, successUserWishlist])

	const addToCartHandler = () => {
		// console.log(packagingType)
		// dispatch(savePackagingType(packagingType))
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(createProductReview(match.params.id, { rating, comment }))
	}
	const wishlistHandler = () => {
		dispatch(createProductWishlist(user._id, product._id))
	}

	return (
		<>
			{/* <Link className='btn  btn-primary my-3 rounded-3' to='/'>
				Go Back
			</Link> */}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Container>
						<Row>
							<Col>
								<Link to='/'>
									<h7 className='my-3'>Home > </h7>
								</Link>
								<Link to='/home'>
									<h7 className='my-3'>Catalogue > </h7>
								</Link>
								<Link to='/product/6102653095ca240714b9a836'>
									<h7 className='my-3'>{product.category1} > </h7>
								</Link>
								<Link to='/product/60ffafb9b29ae9155450621d'>
									<h7 className='my-3'>{product.category2} </h7>
								</Link>

								<Col className='my-5' align='center'>
									<Figure.Image
										src={product.image}
										alt={product.name}
										fluid
										width='600'
									/>
								</Col>
								<Col align='center'>
									<ButtonGroup aria-label='Basic example'>
										<Button variant='secondary'>
											<i class='fas fa-circle'></i>
										</Button>
										<Button variant='secondary'>
											<i class='fas fa-circle'></i>
										</Button>
										<Button variant='secondary'>
											<i class='fas fa-circle'></i>
										</Button>
										<Button variant='secondary'>
											<i class='fas fa-circle'></i>
										</Button>
									</ButtonGroup>
								</Col>
							</Col>

							<Col md={6} className='my-5'>
								<ListGroup className='mx-1 my-1 px-1' variant='flush'>
									<ListGroup>
										<h1>{product.name}</h1>
									</ListGroup>
									<ListGroup className=' my-1 ' variant='flush'>
										<Row>
											{' '}
											<Col sm={12} md={3} className='my-2'>
												<b1> Rs {product.price}</b1>
											</Col>
											<Col className='my-3'>
												<Button disabled class='btn-out-primary '>
													{product.keyword1}
												</Button>
												<Button disabled class='btn-out-primary  '>
													{product.keyword2}
												</Button>
												<Button disabled class='btn-out-primary  '>
													{product.keyword3}
												</Button>
											</Col>
										</Row>
									</ListGroup>

									<ListGroup className='mx-1 my-1 px-1' variant='flush'>
										{/* <Rating
													value={product.rating}
													text={`${product.numReviews} reviews.`}
												/> */}
										<Row className='my-3'>
											<Col sm={3} md={4} lg={3}>
												<Row align='center'>
													<div>
														<Image
															src='\uploads\sun.svg'
															width={60}
															fluid
														></Image>
													</div>
												</Row>
												<Row align='center'>
													<b3>Sunlight</b3>
												</Row>
												<Row align='center'>
													<h6>{product.sunlight}</h6>
												</Row>
											</Col>
											<Col sm={3} md={4} lg={3}>
												<Row align='center'>
													<div>
														<Image
															src='\uploads\water.svg'
															width={47.2}
															fluid
														></Image>
													</div>
												</Row>
												<Row align='center'>
													<b3>Water</b3>
												</Row>
												<Row align='center'>
													<h6>{product.water}</h6>
												</Row>
											</Col>
											<Col sm={3} md={4} lg={3}>
												<Row align='center'>
													<div>
														<Image
															src='\uploads\temp.svg'
															fluid
															width={30}
														></Image>
													</div>
												</Row>
												<Row align='center'>
													<b3>Temperature</b3>
												</Row>
												<Row align='center'>
													<h6>{product.temprature}</h6>
												</Row>
											</Col>
											<Col sm={3} md={4} lg={3}>
												<Row align='center'>
													<div>
														<Image
															src='\uploads\ruler.svg'
															fluid
															width={59}
														></Image>
													</div>
												</Row>
												<Row align='center'>
													<b3>Height</b3>
												</Row>
												<Row align='center'>
													<h6>{product.height}</h6>
												</Row>
											</Col>
										</Row>
									</ListGroup>

									{/* <Col>
											{userInfo ? (
												<Button
													className='btn btn-light my-3'
													onClick={wishlistHandler}
												>
													{user.wishlists.some(
														(e) => e.productWish === product._id
													) ? (
														<i class='fas fa-heart'></i>
													) : (
														<>
															<i class='far fa-heart'></i>
														</>
													)}
												</Button>
											) : (
												<Button disabled>
													<i class='far fa-heart'></i>
												</Button>
											)}
										</Col> */}
								</ListGroup>

								<ListGroup className='mx-1 my-1 px-1' variant='flush'>
									{/* <ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${product.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item> */}
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
											</Col>
										</Row>
									</ListGroup.Item>

									{product.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col>
													<select
														class='form-select  bg-color: transparent'
														value={qty}
														onChange={(e) => setQty(e.target.value)}
													>
														{[...Array(product.countInStock).keys()].map(
															(x) => (
																<option key={x + 1} value={x + 1}>
																	{x + 1}
																</option>
															)
														)}
													</select>
												</Col>
											</Row>
										</ListGroup.Item>
									)}
									{/* <ListGroup.Item>
									{packagings.map((packaging) => (
										<Form.Check
											type='radio'
											label={packaging.name}
											id={packaging._id}
											name='PackagingType'
											value={packaging.name}
											onChange={(e) =>
												setPackagingType(e.target.value)
											}></Form.Check>
									))}
								</ListGroup.Item> */}

									<Row>
										<Col>
											<Button
												onClick={addToCartHandler}
												className='btn btn-block mx-1 my-2 rounded-3'
												type='button'
												class='btn-custom-cont'
												disabled={product.countInStock === 0}
											>
												Add to cart
											</Button>

											<Button
												onClick={addToCartHandler}
												className='btn btn-block mx-1 my-2 rounded-3'
												type='button'
												class='btn-custom-out'
												disabled={product.countInStock === 0}
											>
												Buy Now
											</Button>
										</Col>
										<Col align='right'>
											<Button
												onClick={addToCartHandler}
												className='btn btn-block mx-1 my-2 rounded-3'
												type='button'
												class='btn-custom-out'
												disabled={product.countInStock === 0}
											>
												<i class='fas fa-heart mx-2'></i>
												Keep as a wish
											</Button>
										</Col>
									</Row>
								</ListGroup>
							</Col>
						</Row>
						<Row>
							<ListGroup variant='flush'>
								<h5 className='mx-1 my-3 px-1'>Description</h5>
								<h6 className='mx-1  px-1'>Botanical Name : </h6>
								<p className='mx-1  px-1'>{product.botanicalname}</p>
								<h6 className='mx-1  px-1'>Origin : </h6>
								<p className='mx-1  px-1'>{product.origin}</p>
								<p className='mx-1 my-3 px-1'> {product.description}</p>
							</ListGroup>
							<hr className='mx-1 my-3 px-1'></hr>
							<ListGroup variant='flush'>
								<h5 className='mx-1 my-3 px-1'>Shipping Information</h5>
								<p className='mx-1 my-3 px-1'>
									{' '}
									Our plants are packaged with care and delivered from our
									greenhouse to your door. All orders over $75 ship free! Our
									standard shipping time is 2-4 business days Standard shipping
									is $4.99 for orders under $19.99; $7.99 for orders $20-$74.99
									We also offer next day shipping and Saturday delivery
								</p>
								<hr className='mx-1 my-3 px-1'></hr>
							</ListGroup>
							<ListGroup variant='flush'>
								<h5 className='mx-1 my-3 px-1'>Whats Included</h5>
								<p className='mx-1 my-3 px-1'>
									{' '}
									Our plants are packaged with care and delivered from our
									greenhouse to your door. All orders over $75 ship free! Our
									standard shipping time is 2-4 business days Standard shipping
									is $4.99 for orders under $19.99; $7.99 for orders $20-$74.99
									We also offer next day shipping and Saturday delivery
								</p>
								<hr className='mx-1 my-3 px-1'></hr>
							</ListGroup>
							<ListGroup variant='flush'>
								{/* <h5 className='mx-1 my-3 px-1'>You May Also Like</h5>
								<Row>
									<Col xs={12} s={6} md={4} lg={3} className='my-5'>
										<Image
											src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
											fluid
										></Image>
										<Row>
											<Col>
												<s4>Plant Name</s4>
											</Col>
											<Col align='right'>
												<s4>Rs 400</s4>
											</Col>
										</Row>
									</Col>
									<Col xs={12} s={6} md={4} lg={3} className='my-5'>
										<Image
											src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
											fluid
										></Image>
										<Row>
											<Col>
												<s4>Plant Name</s4>
											</Col>
											<Col align='right'>
												<s4>Rs 400</s4>
											</Col>
										</Row>
									</Col>
									<Col xs={12} s={6} md={4} lg={3} className='my-5'>
										<Image
											src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
											fluid
										></Image>
										<Row>
											<Col>
												<s4>Plant Name</s4>
											</Col>
											<Col align='right'>
												<s4>Rs 400</s4>
											</Col>
										</Row>
									</Col>
									<Col xs={12} s={6} md={4} lg={3} className='my-5'>
										<Image
											src='https://ik.imagekit.io/jadebox/annie-spratt-fbAnIjhrOL4-unsplash_KfixXgqTg.jpg?updatedAt=1627315814371'
											fluid
										></Image>
										<Row>
											<Col>
												<s4>Plant Name</s4>
											</Col>
											<Col align='right'>
												<s4>Rs 400</s4>
											</Col>
										</Row>
									</Col>
									<div align='center' className='my-5 '>
										<Button
											onClick={addToCartHandler}
											className='btn btn-block mx-1 my-2 rounded-3'
											type='button'
											class='btn-custom-out'
											disabled={product.countInStock === 0}
										>
											View All
										</Button>
									</div>
								</Row> */}
								<h5 className='mx-1 my-3 px-1'>You May Also Like</h5>
								<Row className='mx-1 my-3 px-1'>
									<Col sm={12} md={6} lg={4} xl={3}>
										<Product product={product}></Product>
									</Col>
									<Col sm={12} md={6} lg={4} xl={3}>
										<Product product={product}></Product>
									</Col>
									<Col sm={12} md={6} lg={4} xl={3}>
										<Product product={product}></Product>
									</Col>
									<Col sm={12} md={6} lg={4} xl={3}>
										<Product product={product}></Product>
									</Col>
								</Row>

								<hr className='mx-1 my-3 px-1'></hr>
							</ListGroup>
							<Col>
								<h5 className='mx-1 my-3 px-1'>Reviews</h5>
								{product.reviews.length === 0 && <Message>No Reviews</Message>}
								<ListGroup variant='flush'>
									{product.reviews.map((review) => (
										<ListGroup.Item key={review._id}>
											<strong>{review.name}</strong>
											<Rating value={review.rating} />
											<p>{review.createdAt.substring(0, 10)}</p>
											<p>{review.comment}</p>
										</ListGroup.Item>
									))}
									<ListGroup.Item>
										<h5>Write a customer Review</h5>
										{successProductReview && (
											<Message variant='success'>
												Review submitted successfully
											</Message>
										)}
										{loadingProductReview && <Loader />}
										{errorProductReview && (
											<Message variant='danger'>{errorProductReview}</Message>
										)}
										{userInfo ? (
											<Form onSubmit={submitHandler}>
												<Form.Group controlId='rating'>
													<Form.Label>Rating</Form.Label>

													<select
														class='form-select  bg-color: transparent'
														value={rating}
														onChange={(e) => setRating(e.target.value)}
													>
														<option value=''>Select...</option>
														<option value='1'>1 - Poor</option>
														<option value='2'>2 - Fair</option>
														<option value='3'>3 - Good</option>
														<option value='4'>4 - Very Good</option>
														<option value='5'>5 - Excellent</option>
													</select>
												</Form.Group>
												<Form.Group controlId='comment'>
													<Form.Label>Comment</Form.Label>
													<Form.Control
														as='textarea'
														row='3'
														value={comment}
														onChange={(e) => setComment(e.target.value)}
													></Form.Control>
												</Form.Group>
												<Button
													className='rounded-3 my-auto'
													disabled={loadingProductReview}
													type='submit'
													variant='primary'
												>
													Submit
												</Button>
											</Form>
										) : (
											<Message>
												Please <Link to='/login'>Sign In</Link> to write a
												review
											</Message>
										)}
									</ListGroup.Item>
								</ListGroup>
							</Col>
							{/* <Col>
							<Table striped bordered hover responsive className='table-sm'>
								<thead>
									<tr>
										<th>IMAGE</th>
										<th>NAME</th>
										<th>PRICE</th>
									</tr>
								</thead>
								<tbody>
									{packagings.map((packaging) => (
										<tr key={packaging._id}>
											<td>
												<Image
													src={packaging.image}
													alt={packaging.name}
													height='30px'
													fluid
												/>
											</td>
											<td>{packaging.name}</td>
											<td>${packaging.price}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</Col> */}
						</Row>
					</Container>
				</>
			)}
		</>
	)
}

export default ProductPageScreen

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Message from '../components/Message.js'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { Row, Col, Container, Form } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import Slider from '@material-ui/core/Slider'

const CatalogueScreen = ({ match }) => {
	const keyword = match.params.keyword

	const pageNumber = match.params.pageNumber || 1
	// Our States
	const [value, setValue] = React.useState([2, 10])

	// Changing State when volume increases/decreases
	const rangeSelector = (event, newValue) => {
		setValue(newValue)
		console.log(newValue)
	}
	const [sortBy] = useState(1)

	const dispatch = useDispatch()

	const productList = useSelector((state) => state.productList)
	const { loading, error, products, page, pages } = productList

	useEffect(() => {
		dispatch(listProducts(keyword, pageNumber))
	}, [dispatch, keyword, pageNumber])

	return (
		<>
			{!keyword ? (
				<>
					<div>
						{/* <Filter
							size={this.state.size}
							sort={this.state.sort}
							handleChangeSize={this.handleChangeSize}
							handleChangeSort={this.handleChangeSort}
							count={this.state.filteredProducts.length}
						></Filter>
						<hr></hr> */}
					</div>
					{/* <Jumbo />
					<ProductCarousel /> */}
					<Container>
						<Row>
							<Col xs={12} md={12} align='center'>
								<h1>Plants</h1>
							</Col>
							{/* <Col xs={12} md={12}>
								{' '}
								<select
									class='form-select  bg-color: transparent font-size:2px'
									value={sortBy}
									onChange={(e) => setSortBy(e.target.value)}
								>
									<option key={1} value={1}>
										Sort by: Newest Arrivals
									</option>
									<option key={2} value={2}>
										Price:Low to High
									</option>
									<option key={3} value={3}>
										Price: High to Low
									</option>
									<option key={4} value={4}>
										Avg. Customer Review
									</option>
									<option key={5} value={5}>
										Name: A to Z
									</option>
									<option key={6} value={6}>
										Name: Z to A
									</option>
								</select>
							</Col> */}
						</Row>
					</Container>
				</>
			) : (
				<div></div>
				// <Row className='mx-5'>
				// 	<Col md={3}>
				// 		<Link to='/' className='btn  btn-primary my-3 rounded-3'>
				// 			Go Back
				// 		</Link>
				// 	</Col>
				// 	<Col md={6} className='py-auto my-auto px-1'>
				// 		<h2>Search results for {keyword}</h2>
				// 	</Col>
				// 	<Col md={3} className='py-auto my-auto'>
				// 		<Row>Total {products.length} products found.</Row>
				// 		<Row className=' py-2'>
				// 			<select
				// 				class='form-select  bg-color: transparent font-size:2px'
				// 				value={sortBy}
				// 				onChange={(e) => setSortBy(e.target.value)}
				// 			>
				// 				<option key={1} value={1}>
				// 					Sort by: Newest Arrivals
				// 				</option>
				// 				<option key={2} value={2}>
				// 					Price:Low to High
				// 				</option>
				// 				<option key={3} value={3}>
				// 					Price: High to Low
				// 				</option>
				// 				<option key={4} value={4}>
				// 					Avg. Customer Review
				// 				</option>
				// 				<option key={5} value={5}>
				// 					Name: A to Z
				// 				</option>
				// 				<option key={6} value={6}>
				// 					Name: Z to A
				// 				</option>
				// 			</select>
				// 		</Row>
				// 	</Col>
				// </Row>
			)}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger' className='mx-5'>
					{error}
				</Message>
			) : (
				<>
					<Container>
						<Row className='catalogue-page'>
							<Col className='my-5'>
								<ol class='breadcrumb'>
									<li class='breadcrumb-item'>
										<a href='#'>
											<s5>Home</s5>
										</a>
									</li>
									<li class='breadcrumb-item active'>
										<s5>Catalogue</s5>
									</li>
								</ol>

								<h5 className='my-3'>Categories</h5>
								<Form>
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Succulents'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Bonsai'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Flowering Plants'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='House Plants'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Herbs'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Hanging Plants'
											/>
										</div>
									))}
								</Form>
								<hr></hr>
								<h5 className='my-3'>Size</h5>
								<Form>
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Mini Plants'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Small Plants'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Medium Plants'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Large Plants'
											/>
										</div>
									))}
								</Form>
								<hr></hr>
								<h5 className='my-3'>Categories</h5>
								<Form>
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Easy'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Moderate'
											/>
										</div>
									))}
									{['checkbox'].map((type) => (
										<div key={`default-${type}`} className='mb-1'>
											<Form.Check
												type={type}
												id={`default-${type}`}
												label='Advanced'
											/>
										</div>
									))}
								</Form>
								<hr></hr>

								<div>
									<h5 className='my-3'>Price Range</h5>
									<Slider
										value={value}
										onChange={rangeSelector}
										valueLabelDisplay='auto'
									/>
									<h6>
										Your Price is between Rs-{value[0]} and Rs-{value[1]}
									</h6>
								</div>
								<hr></hr>
							</Col>
							<Col md={10}>
								{Number(sortBy) === 1 ? (
									<Row>
										{/* {console.log('SortBy:Latest Products')} */}
										{products.reverse().map((product) => (
											<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
												<Product product={product} />
											</Col>
										))}
									</Row>
								) : (
									<>
										{Number(sortBy) === 2 ? (
											<Row>
												{/* {console.log('Low to High')} */}
												{products
													.sort((a, b) => a.price - b.price)
													.map((product) => (
														<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
															<Product product={product} />
														</Col>
													))}
											</Row>
										) : (
											<>
												{Number(sortBy) === 3 ? (
													<Row>
														{/* {console.log('High to Low')} */}
														{products
															.sort((b, a) => a.price - b.price)
															.map((product) => (
																<Col
																	key={product._id}
																	sm={12}
																	md={6}
																	lg={4}
																	xl={3}
																>
																	<Product product={product} />
																</Col>
															))}
													</Row>
												) : (
													<>
														{Number(sortBy) === 4 ? (
															<Row>
																{/* {console.log('Avg. customer Review')} */}
																{products
																	.sort((b, a) => a.rating - b.rating)
																	.map((product) => (
																		<Col
																			key={product._id}
																			sm={12}
																			md={6}
																			lg={4}
																			xl={3}
																		>
																			<Product product={product} />
																		</Col>
																	))}
															</Row>
														) : (
															<>
																{Number(sortBy) === 5 ? (
																	<Row>
																		{/* {console.log('Name: A to Z')} */}
																		{products
																			.sort((a, b) =>
																				a.name.toUpperCase() <
																				b.name.toUpperCase()
																					? -1
																					: a.name.toUpperCase() >
																					  b.name.toUpperCase()
																					? 1
																					: 0
																			)
																			.map((product) => (
																				<Col
																					key={product._id}
																					sm={12}
																					md={6}
																					lg={4}
																					xl={3}
																				>
																					<Product product={product} />
																				</Col>
																			))}
																	</Row>
																) : (
																	<Row>
																		{/* {console.log('Name:Z to A')} */}
																		{products
																			.sort((b, a) =>
																				a.name.toUpperCase() <
																				b.name.toUpperCase()
																					? -1
																					: a.name.toUpperCase() >
																					  b.name.toUpperCase()
																					? 1
																					: 0
																			)
																			.map((product) => (
																				<Col
																					key={product._id}
																					sm={12}
																					md={6}
																					lg={4}
																					xl={3}
																				>
																					<Product product={product} />
																				</Col>
																			))}
																	</Row>
																)}
															</>
														)}
													</>
												)}
											</>
										)}
									</>
								)}
							</Col>
						</Row>
					</Container>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ''}
					></Paginate>
				</>
			)}
		</>
	)
}

export default CatalogueScreen

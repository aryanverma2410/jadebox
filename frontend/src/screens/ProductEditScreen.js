import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { Select, MenuItem } from '@material-ui/core'
const ProductEditScreen = ({ match, history }) => {
	const productId = match.params.id

	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [image, setImage] = useState('')
	const [brand, setBrand] = useState('')

	const [category, setCategory] = useState('')
	const [category1, setCategory1] = useState('')
	const [category2, setCategory2] = useState('')
	const [keyword1, setKeyword1] = useState('')
	const [keyword2, setKeyword2] = useState('')
	const [keyword3, setKeyword3] = useState('')
	const [sunlight, setSunlight] = useState('')
	const [origin, setOrigin] = useState('')
	const [botanicalname, setBotanicalname] = useState('')
	const [water, setWater] = useState('')
	const [height, setHeight] = useState('')
	const [temprature, setTemprature] = useState('')
	const [countInStock, setCountInStock] = useState(0)
	const [description, setDescription] = useState('')
	const [uploading, setUploading] = useState(false)

	const dispatch = useDispatch()

	const productDetails = useSelector((state) => state.productDetails)
	const { loading, error, product } = productDetails

	const productUpdate = useSelector((state) => state.productUpdate)
	const {
		loading: loadingUpdate,
		error: errorUpdate,
		success: successUpdate,
	} = productUpdate

	useEffect(() => {
		if (successUpdate) {
			dispatch({ type: PRODUCT_UPDATE_RESET })
			history.push('/admin/productlist')
		} else {
			if (!product.name || product._id !== productId) {
				dispatch(listProductDetails(productId))
			} else {
				setName(product.name)
				setPrice(product.price)
				setImage(product.image)
				setBrand(product.brand)
				setCategory(product.category)
				setCategory1(product.category1)
				setCategory2(product.category2)
				setKeyword1(product.keyword1)
				setKeyword2(product.keyword2)
				setKeyword3(product.keyword3)
				setSunlight(product.sunlight)
				setWater(product.water)
				setBotanicalname(product.botanicalname)
				setOrigin(product.origin)
				setTemprature(product.temprature)
				setHeight(product.height)
				setCountInStock(product.countInStock)
				setDescription(product.description)
			}
		}
	}, [dispatch, history, productId, product, successUpdate])

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('image', file)
		setUploading(true)

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}

			const { data } = await axios.post('/api/upload', formData, config)

			setImage(data)
			setUploading(false)
		} catch (error) {
			console.error(error)
			setUploading(false)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(
			updateProduct({
				_id: productId,
				name,
				price,
				image,
				brand,
				category,
				category1,
				category2,
				keyword1,
				keyword2,
				keyword3,
				sunlight,
				water,
				origin,
				botanicalname,
				temprature,
				height,
				description,
				countInStock,
			})
		)
	}
	const brands = ['brand1 ', 'brand2']
	const categories = [
		'Plants',
		'Planters',
		'Accessories',
		'Consumables',
		'Seeds',
		'Manure & Organic Fertilizers',
		'Care',
	]
	const subcategory = [
		['Plants', 'Annual'],
		['Plants', 'Perennial'],
		['Plants', 'Succulant'],
		['Plants', 'Tropical'],
		['Plants', 'Bamboos'],
		['Plants', 'Grasses'],
		['Plants', 'Ferns'],
		['Plants', 'Climbers'],
		['Plants', 'Creepers'],
		['Plants', 'Vines'],
		['Plants', 'Cacti'],
		['Plants', 'Fruit Plants'],
		['Plants', 'Indoor Plants'],
		['Plants', 'Lilies And Bulbous'],
		['Plants', 'Medicinal Plants'],
		['Plants', 'Palms'],
		['Plants', 'Spice Plants'],
		['Plants', 'Herbs'],
		['Plants', 'Vegitable Plants'],
		['Plants', 'Water And Aquatic Plants'],
		['Plants', 'Forestery Trees'],
		['Plants', 'Shrubs'],
		['Planters', 'Plastic Planters'],
		['Planters', 'Ceramic Planters'],
		['Planters', 'Decorative Planters'],
		['Planters', 'Iron Planters'],
		['Planters', 'Clay Planters'],
		['Planters', 'Nursery Pots'],
		['Planters', 'Hydroponic Planters'],
		['Planters', 'Grow Bags'],
		['Planters', 'Seedling Tray'],
		['Accessories', 'Rakes'],
		['Accessories', 'Weeders'],
		['Accessories', 'Cultivator And Tillers'],
		['Accessories', 'Axes'],
		['Accessories', 'Shovels'],
		['Accessories', 'Pruners'],
		['Accessories', 'Shears'],
		['Accessories', 'Scissors'],
		['Accessories', 'Hand Gloves'],
		['Accessories', 'Kurpi & Khurpa'],
		['Accessories', 'Hedge Shear'],
		['Accessories', 'Garden Hoe'],
		['Accessories', 'Grafting Tool'],
		['Accessories', 'Spray Bottle'],
		['Accessories', 'Lawn Mover'],
		['Accessories', 'Green Net'],
		['Accessories', 'Garden Fencing Net'],
		['Consumables', 'Coco Peat Block'],
		['Consumables', 'Perlite'],
		['Consumables', 'Vermiculite'],
		['Consumables', 'Neem Cake Powder'],
		['Consumables', 'Musterd Cake Powder'],
		['Consumables', 'Coco Hush Chips'],
		['Consumables', 'Rise Husk'],
		['Consumables', 'Charcoal Chips'],
		['Consumables', 'Moos Stick'],
		['Manure & Organic Fertilizers', 'Vegetables'],
		['Manure & Organic Fertilizers', 'Vermi Compost'],
		['Manure & Organic Fertilizers', 'Cow Dung'],
		['Manure & Organic Fertilizers', 'Mixture'],
		['Manure & Organic Fertilizers', 'Fish Meal'],
		['Manure & Organic Fertilizers', 'Bone Meal'],
		['Care', 'Neem Oil'],
	]
	const waterlevel = ['bhut', 'kam', 'etc']
	const heightincm = ['lamba', 'chota', 'etc']
	const temperature = ['garam', 'naram', 'thanda']
	const sunlightamount = ['tez', 'mid', 'indoor']
	const keywords = ['Air Cleaner', 'Pet Friendly', 'Easy To Care']
	return (
		<>
			<Container>
				<Link to='/admin/productlist' className='btn btn-light my-3'>
					Go Back
				</Link>
				<FormContainer>
					<h1>Create / Edit Product</h1>
					{loadingUpdate && <Loader />}
					{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
					{loading ? (
						<Loader />
					) : error ? (
						<Message variant='danger'>{error}</Message>
					) : (
						<Form onSubmit={submitHandler}>
							<Form.Group controlId='name'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='name'
									placeholder='Enter name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='botanicalname'>
								<Form.Label>Botanical Name</Form.Label>
								<Form.Control
									type='botanicalname'
									placeholder='Enter Botanical Name'
									value={botanicalname}
									onChange={(e) => setBotanicalname(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='origin'>
								<Form.Label>Origin</Form.Label>
								<Form.Control
									type='origin'
									placeholder='Enter Origin'
									value={origin}
									onChange={(e) => setOrigin(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='price'>
								<Form.Label>Price</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter price'
									value={price}
									onChange={(e) => setPrice(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='image'>
								<Form.Label>Image</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter image url'
									value={image}
									onChange={(e) => setImage(e.target.value)}
								></Form.Control>
								<Form.File
									id='image-file'
									label='Choose File'
									custom
									onChange={uploadFileHandler}
								></Form.File>
								{uploading && <Loader />}
							</Form.Group>

							<Form.Group controlId='countInStock'>
								<Form.Label>Count In Stock</Form.Label>
								<Form.Control
									type='number'
									placeholder='Enter countInStock'
									value={countInStock}
									onChange={(e) => setCountInStock(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='description'>
								<Form.Label>Description</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter description'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='category'>
								<Form.Label>SearchTerms</Form.Label>
								<Form.Control
									type='text'
									placeholder='SearchTerms'
									value={category}
									onChange={(e) => setCategory(e.target.value)}
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='brand'>
								<Form.Label>Brand</Form.Label>
								<select
									className='form-select'
									value={brand}
									onChange={(e) => setBrand(e.target.value)}
								>
									{brands.map((brand) => {
										return (
											<option key={brand.value} value={brand.value}>
												{brand}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='category1'>
								<Form.Label>Category</Form.Label>
								{/* <Form.Control
									type='text'
									placeholder='Enter description'
									value={category1}
									onChange={(e) => setCategory1(e.target.value)}
								></Form.Control> */}
								<select
									value={category1}
									onChange={(e) => setCategory1(e.target.value)}
									className='form-select'
								>
									{categories.map((category1) => {
										return (
											<option key={category1.value} value={category1.value}>
												{category1}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='category2'>
								<Form.Label>SubCategory</Form.Label>
								<select
									value={category2}
									onChange={(e) => setCategory2(e.target.value)}
									className='form-select'
								>
									{subcategory.map((category2) => {
										return (
											<option key={category2.value} value={category2.value}>
												{category2}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='keyword1'>
								<Form.Label>Keyword1</Form.Label>
								<select
									value={keyword1}
									onChange={(e) => setKeyword1(e.target.value)}
									className='form-select'
								>
									{keywords.map((keyword1) => {
										return (
											<option key={keyword1.value} value={keyword1.value}>
												{keyword1}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='keyword2'>
								<Form.Label>Keyword2</Form.Label>
								<select
									className='form-select'
									value={keyword2}
									onChange={(e) => setKeyword2(e.target.value)}
								>
									{keywords.map((keyword2) => {
										return (
											<option key={keyword2.value} value={keyword2.value}>
												{keyword2}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='keyword3'>
								<Form.Label>Keyword3</Form.Label>
								<select
									className='form-select'
									value={keyword3}
									onChange={(e) => setKeyword3(e.target.value)}
								>
									{keywords.map((keyword3) => {
										return (
											<option key={keyword3.value} value={keyword3.value}>
												{keyword3}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='sunlight'>
								<Form.Label>Sunlight</Form.Label>
								<select
									className='form-select'
									value={sunlight}
									onChange={(e) => setSunlight(e.target.value)}
								>
									{sunlightamount.map((sunlight) => {
										return (
											<option key={sunlight.value} value={sunlight.value}>
												{sunlight}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='water'>
								<Form.Label>Water</Form.Label>
								<select
									className='form-select'
									value={water}
									onChange={(e) => setWater(e.target.value)}
								>
									{waterlevel.map((water) => {
										return (
											<option key={water.value} value={water.value}>
												{water}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='temprature'>
								<Form.Label>Temperature</Form.Label>
								<select
									className='form-select'
									value={temprature}
									onChange={(e) => setTemprature(e.target.value)}
								>
									{temperature.map((temprature) => {
										return (
											<option key={temprature.value} value={temprature.value}>
												{temprature}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<Form.Group controlId='height'>
								<Form.Label>Height in Cm</Form.Label>
								<select
									className='form-select'
									value={height}
									onChange={(e) => setHeight(e.target.value)}
								>
									{heightincm.map((height) => {
										return (
											<option key={height.value} value={height.value}>
												{height}
											</option>
										)
									})}
								</select>
							</Form.Group>

							<button type='submit' class='btn btn-outline-primary'>
								Update
							</button>
						</Form>
					)}
				</FormContainer>
			</Container>
		</>
	)
}

export default ProductEditScreen

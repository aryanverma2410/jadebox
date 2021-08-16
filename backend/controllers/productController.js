import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
	const pageSize = 40
	const page = Number(req.query.pageNumber) || 1

	const keyword = req.query.keyword
		? {
				category: {
					$regex: req.query.keyword,
					$options: 'i',
				},
		  }
		: {}
	const count = await Product.countDocuments({ ...keyword })
	const products = await Product.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1))
	res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		res.json(product)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		await product.remove()
		res.json({ message: 'Product removed' })
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// @desc    Create a product
// @route   POST /api/products/
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: 'Sample Name',
		price: 0,
		user: req.user._id,
		image: '/image/sample.jpg',
		image2: '/image/sample2.jpg',
		image3: '/image/sample3.jpg',
		image4: '/image/sample4.jpg',
		brand: 'sample brand',
		category: 'sample category',
		category1: 'Plants',
		category2: 'Annual',
		countInStock: 0,
		numReviews: 0,
		description: 'Sample description',
		keyword1: 'Easy to care',
		botanicalname: 'Botanical Name',
		origin: 'Origin',
		keyword2: 'Air Cleaner',
		keyword3: 'Pet Friendly',
		sunlight: 'Needs sun',
		water: 'Every 7 days',
		temprature: 'Min 25 deg C',
		height: '15-20 cm',
	})

	const createdProduct = await product.save()
	res.status(201).json(createdProduct)
})

// @desc    update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		description,
		image,
		image2,
		image3,
		image4,
		brand,
		category,
		category1,
		category2,
		countInStock,
		keyword1,
		keyword2,
		keyword3,
		origin,
		botanicalname,
		sunlight,
		water,
		temprature,
		height,
	} = req.body

	const product = await Product.findById(req.params.id)

	if (product) {
		product.name = name
		product.price = price
		product.description = description
		product.image = image
		product.image2 = image2
		product.image3 = image3
		product.image4 = image4
		product.brand = brand
		product.category1 = category1
		product.category2 = category2
		product.category =
			name +
			' ' +
			botanicalname +
			' ' +
			category1 +
			' ' +
			category2 +
			' ' +
			category
		product.countInStock = countInStock
		product.keyword1 = keyword1
		product.keyword2 = keyword2
		product.keyword3 = keyword3
		product.sunlight = sunlight
		product.water = water
		product.origin = origin
		product.botanicalname = botanicalname
		product.temprature = temprature
		product.height = height

		const updatedProduct = await product.save()
		res.json(updatedProduct)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// @desc    create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body

	const product = await Product.findById(req.params.id)

	if (product) {
		const alreadyReviewed = product.reviews.find(
			(r) => r.user.toString() === req.user._id.toString()
		)
		if (alreadyReviewed) {
			res.status(400)
			throw new Error('Product already Reviewed')
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id,
		}

		product.reviews.push(review)

		product.numReviews = product.reviews.length
		product.rating =
			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
			product.reviews.length

		await product.save()
		res.status(201).json({ message: 'Review Added' })
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

// @desc    get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({}).sort({ rating: -1 }).limit(3)
	res.json(products)
})

export {
	getProducts,
	getProductById,
	deleteProduct,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
}

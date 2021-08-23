import asyncHandler from 'express-async-handler'
import Blog from '../models/blogModel.js'

// @desc Fetch all Blog
// @route GET /api/Blog
// @access Public
const getBlogs = asyncHandler(async (req, res) => {
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
	const count = await Blog.countDocuments({ ...keyword })
	const blogs = await Blog.find({ ...keyword })
		.limit(pageSize)
		.skip(pageSize * (page - 1))
	res.json({ blogs, page, pages: Math.ceil(count / pageSize) })
})

// // @desc Fetch single product
// // @route GET /api/products/:id
// // @access Public

const getBlogById = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id)

	if (blog) {
		res.json(blog)
	} else {
		res.status(404)
		throw new Error('Blog not found')
	}
})
// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
	const blog = await Blog.findById(req.params.id)

	if (blog) {
		await blog.remove()
		res.json({ message: 'Blog removed' })
	} else {
		res.status(404)
		throw new Error('Blog not found')
	}
})

// @desc    Create a BLog
// @route   POST /api/blog/
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
	const blog = new Blog({
		articlename: 'Sample Name',
		image: '/image/sample.jpg',
		image2: '/image/sample2.jpg',
		image3: '/image/sample3.jpg',
		image4: '/image/sample4.jpg',

		description: 'Sample ',
		author: 'Sample',
	})

	const createdBlog = await blog.save()
	res.status(201).json(createdBlog)
})

// @desc    update a product
// @route   PUT /api/Blog/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
	const {
		articlename,

		description,
		image,
		image2,
		image3,
		image4,
		author,
	} = req.body

	const blog = await Blog.findById(req.params.id)

	if (blog) {
		blog.name = name
		blog.price = price
		blog.description = description
		blog.image = image
		blog.image2 = image2
		blog.image3 = image3
		blog.image4 = image4
		blog.brand = brand
		blog.category1 = category1
		blog.category2 = category2
		blog.category =
			name +
			' ' +
			botanicalname +
			' ' +
			category1 +
			' ' +
			category2 +
			' ' +
			category
		blog.countInStock = countInStock
		blog.keyword1 = keyword1
		blog.keyword2 = keyword2
		blog.keyword3 = keyword3
		blog.sunlight = sunlight
		blog.water = water
		blog.origin = origin
		blog.botanicalname = botanicalname
		blog.temprature = temprature
		blog.height = height

		const updatedBlog = await blog.save()
		res.json(updatedBlog)
	} else {
		res.status(404)
		throw new Error('Blog not found')
	}
})

// // @desc    create new review
// // @route   POST /api/products/:id/reviews
// // @access  Private
// const createProductReview = asyncHandler(async (req, res) => {
// 	const { rating, comment } = req.body

// 	const product = await Product.findById(req.params.id)

// 	if (product) {
// 		const alreadyReviewed = product.reviews.find(
// 			(r) => r.user.toString() === req.user._id.toString()
// 		)
// 		if (alreadyReviewed) {
// 			res.status(400)
// 			throw new Error('Product already Reviewed')
// 		}

// 		const review = {
// 			name: req.user.name,
// 			rating: Number(rating),
// 			comment,
// 			user: req.user._id,
// 		}

// 		product.reviews.push(review)

// 		product.numReviews = product.reviews.length
// 		product.rating =
// 			product.reviews.reduce((acc, item) => item.rating + acc, 0) /
// 			product.reviews.length

// 		await product.save()
// 		res.status(201).json({ message: 'Review Added' })
// 	} else {
// 		res.status(404)
// 		throw new Error('Product not found')
// 	}
// })

// @desc    get top rated products
// @route   GET /api/products/top
// @access  Public
// const getTopProducts = asyncHandler(async (req, res) => {
// 	const products = await Product.find({}).sort({ rating: -1 }).limit(3)
// 	res.json(products)
// })

export {
	getBlogs,
	getBlogById,
	deleteBlog,
	createBlog,
	updateBlog,
	// createProductReview,
	// getTopProducts,
}

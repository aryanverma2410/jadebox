import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		rating: { type: Number, required: true },
		comment: { type: String, required: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

const productSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		category1: {
			type: String,
			required: true,
		},
		category2: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		rating: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
		keyword1: {
			type: String,
			required: true,
		},
		keyword2: {
			type: String,
			required: true,
		},
		keyword3: {
			type: String,
			required: true,
		},
		sunlight: {
			type: String,
			required: true,
		},
		water: {
			type: String,
			required: true,
		},
		temprature: {
			type: String,
			required: true,
		},
		botanicalname: {
			type: String,
			required: true,
		},
		origin: {
			type: String,
			required: true,
		},
		height: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Product = mongoose.model('Product', productSchema)

export default Product

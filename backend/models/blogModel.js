import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		articlename: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		image2: {
			type: String,
		},
		image3: {
			type: String,
		},
		image4: {
			type: String,
		},
		description: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Blog = mongoose.model('Blog', blogSchema)

export default Blog

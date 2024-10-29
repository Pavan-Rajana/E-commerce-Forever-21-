import mongoose from "mongoose"
const {Schema, model, models} = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		cartData: {
			type: Object,
			default: {},
		},
	},
	/* minimize is for the Object we created for cartData */
	{minimize: false}
)

const userModel = models.user || model("user", userSchema)

export default userModel

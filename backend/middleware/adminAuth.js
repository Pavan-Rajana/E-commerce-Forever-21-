import {JWT} from "../npmImports.js"

export const adminAuth = async (req, res, next) => {
	try {
		const {token} = req.headers
		if (!token) {
			return res.json({
				success: "false",
				msg: "Not Authorized login Again",
			})
		}
		const tokenDecode = JWT.verify(token, process.env.JWT_SECRET)
		if (
			tokenDecode !==
			process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
		) {
			return res.json({
				success: "false",
				msg: "Not Authorized login Again",
			})
		}
		next()
	} catch (error) {
		console.log(error)
		res.json({success: "false", msg: error.message})
	}
}

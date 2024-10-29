// Function for add product
export const addProduct = async (req, res) => {
	try {
		const {
			name,
			description,
			price,
			category,
			subCategory,
			sizes,
			bestseller,
		} = req.body

		const image1 = req.files.image1 && req.files.image1[0]
		const image2 = req.files.image2 && req.files.image2[0]
		const image3 = req.files.image3 && req.files.image3[0]
		const image4 = req.files.image4 && req.files.image4[0]

		const images = [image1, image2, image3, image4].filter((item) => {
			item !== undefined
		})
		// console.log(images)

		console.log(
			name,
			description,
			price,
			category,
			subCategory,
			sizes,
			bestseller
		)
		console.log(image1, image2, image3, image4)
		res.json({})
	} catch (error) {
		console.log(error)
		res.json({success: false, msg: error.message})
	}
}

// Listing products
export const listProduct = async (req, res) => {}

// Removing products
export const removeProduct = async (req, res) => {}

// Single product info
export const singleProduct = async (req, res) => {}

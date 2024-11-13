import {v2 as cloudinary} from "cloudinary"
import {productModel} from "../models/productModel.js"
import {json} from "express"

//* add products
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

		const image1 = req.files.image1 ? req.files.image1[0] : undefined
		const image2 = req.files.image2 ? req.files.image2[0] : undefined
		const image3 = req.files.image3 ? req.files.image3[0] : undefined
		const image4 = req.files.image4 ? req.files.image4[0] : undefined

		const images = [image1, image2, image3, image4].filter((item) => {
			item !== undefined
		})

		let imagesUrl = await Promise.all(
			images.map(async (item) => {
				let res = await cloudinary.uploader.upload(item.path, {
					resource_type: "image",
				})
				return res.secure_url
			})
		)
		const productData = {
			name,
			description,
			category,
			subCategory,
			price: Number(price),
			bestseller: bestseller === "true" ? true : false,
			// sizes: JSON.parse(sizes),
			sizes: sizes ? JSON.parse(sizes) : undefined,
			image: imagesUrl.length ? imagesUrl : undefined,
			Date: Date.now(),
		}

		console.log("productData", productData)
		const product = new productModel(productData)
		await product.save()

		// console.log(
		// 	name,
		// 	description,
		// 	price,
		// 	category,
		// 	subCategory,
		// 	sizes,
		// 	bestseller
		// )
		// console.log(image1, image2, image3, image4)
		res.json({success: true, msg: "Product added"})
	} catch (error) {
		console.log(error)
		res.json({success: false, msg: error.message})
	}
}

//* Listing products
export const listProduct = async (req, res) => {
	try {
		const products = await productModel.find({})
		res.json({success: true, products})
	} catch (error) {
		console.log(error)
		res.json({success: false, msg: error.message})
	}
}

//! Removing products
export const removeProduct = async (req, res) => {
	try {
		await productModel.findByIdAndDelete(req.body.id)
		res.json({success: true, msg: "Product Removed"})
	} catch (error) {
		console.log(error)
		res.json({success: false, msg: error.message})
	}
}

//* Single product info
export const singleProduct = async (req, res) => {
	try {
		const {productId} = req.body
		const product = await productModel.findById(productId)
		res.json({success: true, product})
	} catch (error) {
		console.log(error)
		res.json({success: false, msg: error.message})
	}
}

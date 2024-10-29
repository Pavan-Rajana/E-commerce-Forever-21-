import {express} from "../npmImports.js"
import {
	addProduct,
	singleProduct,
	removeProduct,
	listProduct,
} from "../controllers/productController.js"
import {upload} from "../middleware/multer.js"

export const productRouter = express.Router()

productRouter.post(
	"/add-product",
	upload.fields([
		{name: "image1", maxCount: 1},
		{name: "image2", maxCount: 1},
		{name: "image3", maxCount: 1},
		{name: "image4", maxCount: 1},
	]),
	addProduct
)
productRouter.post("/remove-product", removeProduct)
productRouter.post("/single-product", singleProduct)
productRouter.get("/list-products", listProduct)

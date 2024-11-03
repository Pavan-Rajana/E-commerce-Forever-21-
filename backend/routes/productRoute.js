import {express} from "../npmImports.js"
import {
	addProduct,
	singleProduct,
	removeProduct,
	listProduct,
} from "../controllers/productController.js"
import {upload} from "../middleware/multer.js"

export const productRouter = express.Router()

productRouter.get("/list-products", listProduct)
productRouter.post(
	"/add-products",
	upload.fields([
		{name: "image1", maxCount: 1},
		{name: "image2", maxCount: 1},
		{name: "image3", maxCount: 1},
		{name: "image4", maxCount: 1},
	]),
	addProduct
)
productRouter.post("/remove-products", removeProduct)
productRouter.post("/single-products", singleProduct)

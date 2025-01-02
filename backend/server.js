import "dotenv/config"
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js"
import {express, cors} from "./npmImports.js"
import {productModel} from "./models/productModel.js"
import userModel from "./models/userModel.js"
import {userRouter} from "./routes/userRoute.js"
import {productRouter} from "./routes/productRoute.js"

// Initialize app
const app = express()
const port = process.env.PORT || 8000

// Connect to database and Cloudinary
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// API endpoints
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.get("/", (req, res) => {
	res.send("API working")
})

// Export as a serverless function for Vercel
export default app

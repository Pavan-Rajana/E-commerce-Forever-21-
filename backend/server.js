import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js"
import {express, cors} from "./npmImports.js"
import "dotenv/config"
import {productModel} from "./models/productModel.js"
import userModel from "./models/userModel.js"
import {userRouter} from "./routes/userRoute.js"

// App Config
const app = express()
const port = process.env.PORT || 8000
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// APi endpoints
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
	res.send("API working")
})

app.listen(port, () => {
	console.log("Server Listening")
})

import {
	loginUser,
	registerUser,
	adminLogin,
} from "../controllers/userController.js"
import {express} from "../npmImports.js"

export const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/admin", adminLogin)

import { useContext } from "react"
import { a_assets } from "../assets/admin_assets/assets"
import { ShopContext } from "../context/ShopContext"

const Footer = () => {

    const { navigate } = useContext(ShopContext)

    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={a_assets.logo} className="mb-5 w-32" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium suscipit at officia. Incidunt, dicta labore. Nam officiis rem eligendi. Veniam nesciunt voluptatibus id nulla, magni in dicta rerum excepturi magnam?
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/about')}>About Us</li>
                        <li onClick={() => navigate('/policy')}>Delivery</li>
                        <li onClick={() => navigate('/policy')}>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-221-435-908</li>
                        <li>Contact@forever21.com </li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyrights &copy; 2024 Forever21 All Right Reserved </p>
            </div>
        </div>
    )
}

export default Footer
import { useContext, useState } from "react"
import { f_assets } from "../assets/frontend_assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const PlaceOrder = () => {

    const [method, setMethod] = useState("cod")
    const { navigate } = useContext(ShopContext)

    return (
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between gap-4 pt-5 sm:py-14 min-h-[80vh] border-t">
            {/* ---- Left side ---- */}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={""} text2={"checkout"} />
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="First name" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                    <input type="text" placeholder="Last name" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                </div>
                <input type="email" placeholder="Enter your email" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                <div className="flex gap-3">
                    <input type="text" placeholder="Street" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                    <input type="text" placeholder="Landmark" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="City" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                    <input type="text" placeholder="State" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="Zip code" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                    <input type="text" placeholder="Country" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
                </div>
                <input type="text" placeholder="phone no" className="border border-gray-300 py-1.5 px-3.5 w-full rounded-sm" />
            </div>
            {/* right side */}
            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>
                <div className="mt-12">
                    <Title text1={'payment'} text2={"method"} />

                    {/* -- PAYMENT METHOD */}
                    <div className="flex gap-3 flex-col lg:flex-row">
                        <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border py-1 px-3 cursor-pointer">
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`} ></p>
                            <img src={f_assets.stripe_logo} className="h-5 mx-4" alt="" />
                        </div>
                        <div onClick={() => setMethod("razorpay")} className="flex gap-3 flex-col lg:flex-row">
                            <div className="flex items-center gap-3 border py-1 px-3 cursor-pointer">
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`} ></p>
                                <img src={f_assets.razorpay_logo} className="h-5 mx-4" alt="" />
                            </div>
                        </div>
                        <div onClick={() => setMethod("cod")} className="flex gap-3 flex-col lg:flex-row">
                            <div className="flex items-center gap-3 border py-1 px-3 cursor-pointer">
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}></p>
                                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-end mt-8">
                        <button onClick={() => navigate('/orders')} className="uppercase bg-black text-white px-16 py-3 text-sm">Place order</button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default PlaceOrder
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { f_assets } from "../assets/frontend_assets/assets"
import RelatedProducts from "../components/RelatedProducts"

const Product = () => {

    const { productId } = useParams()
    // console.log(productId);
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(false)
    const [image, setImage] = useState()
    const [size, setSize] = useState("")

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                // console.log(item)
                setImage(item.image[0])
                return null
            }
        })
    }

    useEffect(() => {
        fetchProductData()
    }, [fetchProductData, productId, products])

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">

            {/* ------ Product Data -----*/}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Images */}
                <div className="flex-1 flex  flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[30%] w-full">
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-3/4 sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
                            ))
                        }
                    </div>
                    <div className="w-1/2 sm:w-[80%]">
                        <img src={image} className="w-full h-auto sm:mb-3 flex-shrink" alt="" />
                    </div>
                </div>
                {/* ----- Product Info ------- */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img className="w-3 5" src={f_assets.star_icon} alt="" />
                        <img className="w-3 5" src={f_assets.star_icon} alt="" />
                        <img className="w-3 5" src={f_assets.star_icon} alt="" />
                        <img className="w-3 5" src={f_assets.star_icon} alt="" />
                        <img className="w-3 5" src={f_assets.star_dull_icon} alt="" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500 md:">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {
                                productData.sizes.map((item, index) => (
                                    <button className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-800" : ""} `} onClick={() => setSize(item)} key={index}>{item}</button>
                                ))
                            }
                        </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700" onClick={() => addToCart(productData._id, size)}>ADD TO CART</button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-xs sm:text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div >
            {/* ----- Description & Review Section */}
            <div className="mt-20" >
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Review (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate quidem dolor quisquam nisi reprehenderit provident facilis assumenda tempora vitae, iste, laudantium consequatur sit mollitia magnam animi eveniet et ullam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae nihil eveniet inventore harum fugiat, officia hic nemo amet, exercitationem, laboriosam corrupti? Iusto animi recusandae praesentium accusantium illum adipisci et!</p>
                </div>
            </div >

            {/* ---- Display Related Products  */}
            < RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div >
    ) : <div className="opacity-0"></div>
}

export default Product


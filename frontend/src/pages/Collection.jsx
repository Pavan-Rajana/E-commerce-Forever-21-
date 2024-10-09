import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { f_assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"

const Collection = () => {

    const { products } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        setCategory(prev => [...prev, e.target.value])
    }


    useEffect(() => {
        setFilterProducts(products)
    }, [])


    useEffect(() => {
        console.log(category);
    }, [category])

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-10  border-t">
            {/* Filter Options */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex item-center cursor-pointer gap-2">FILTERS
                    <img src={f_assets.dropdown_icon} className={`h-4 mt-2 sm:hidden ${showFilter ? "rotate-90" : ""}`} alt="" />
                </p>

                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"MEN"} onChange={toggleCategory} />MEN
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"WOMEN"} onChange={toggleCategory} />WOMEN
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"KIDS"} onChange={toggleCategory} />KIDS
                        </p>
                    </div>
                </div>
                {/* Sub Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"Topwear"} />Topwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"Bottomwear"} />Bottomwear
                        </p>
                        <p className="flex gap-2">
                            <input type="checkbox" className="w-3" value={"Winterwear"} />Winterwear
                        </p>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTIONS"} />
                    {/* Products */}
                    <select className="border-2 border-gray-300 text-sm px-2">
                        <option value="relevant">Sort By: Relevant</option>
                        <option value="low-high">Sort By: Low to High</option>
                        <option value="high-low">Sort By : High to Low</option>
                    </select>
                </div>
                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        filterProducts.map(({ _id, image, price, name }, index) => (
                            <ProductItem key={index} id={_id} name={name} image={image} price={price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection
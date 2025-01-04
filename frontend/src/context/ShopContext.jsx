import { createContext, useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_fee = 10
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        //Create a deep copy of the cartItems object
        let cartData = structuredClone(cartItems)

        //Check if size is provided. If not, show an error and exit.
        if (!size) {
            toast.error("Select Product Size")
            return
        }
        if (size) {
            toast.success("added to the cart")
            return
        }
        //Check if the item already exists in the cart.
        if (cartData[itemId]) {
            // If the item exists, check if the selected size already exists for that item.
            if (cartData[itemId][size]) {
                // If the size exists, increment the quantity by 1
                cartData[itemId][size] += 1
            } else {
                // If the size does not exist, initialize the size with quantity 1
                cartData[itemId][size] = 1
            }
        } else {
            //If the item does not exist in the cart, create a new entry for the item and size
            cartData[itemId] = { [size]: 1 } // Initialize the size with quantity 1
        }
        // Update the cartItems state with the updated cart data
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0 //: Initialize a counter to keep track of the total number of items
        //: Loop over each item in the cart
        for (const itemId in cartItems) {
            //: For each item, loop over the sizes (cartItems[itemId] is an object where keys are sizes)
            for (const size in cartItems[itemId]) {
                try {
                    //: Check if the quantity for the size is greater than 0
                    if (cartItems[itemId][size] > 0) {
                        //: Add the quantity of this size to the total count
                        totalCount += cartItems[itemId][size]
                    }
                } catch (error) {
                    //: Catch any errors that occur during the loop (like invalid access)
                    console.error("Error calculating cart count:", error)
                }
            }
        }
        //Return the total count of items in the cart
        return totalCount
    }

    useEffect(() => {
        // console.log(cartItems)

    }, [cartItems])

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }

    const getCartAmount = () => {
        let totalAmount = 0
        for (const itemId in cartItems) {
            // Find the matching product by its _id
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) { // Ensure the product exists in the products array
                for (const size in cartItems[itemId]) {
                    try {
                        const quantity = cartItems[itemId][size];
                        if (quantity > 0) {
                            // Multiply price by quantity and add to totalAmount
                            totalAmount += itemInfo.price * quantity;
                        }
                    } catch (error) {
                        console.log("Error calculating total amount:", error);
                    }
                }
            } else {
                console.warn(`Product with ID ${itemId} not found.`);
            }
        }

        return totalAmount; // Return the final calculated total
    }

    const clearCart = () => {
        setCartItems({})
        toast.success("cart has been cleared")
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate, clearCart
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
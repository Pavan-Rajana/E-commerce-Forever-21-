import { createContext, useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets"
import { toast } from "react-toastify"

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_fee = 10
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})

    const addToCart = async (itemId, size) => {
        // Step 1: Create a deep copy of the cartItems object
        let cartData = structuredClone(cartItems)

        // Step 2: Check if size is provided. If not, show an error and exit.
        if (!size) {
            toast.error("Select Product Size") // Display error toast to user
            return // Exit the function if no size is selected
        }

        // Step 3: Check if the item already exists in the cart.
        if (cartData[itemId]) {
            // Step 4: If the item exists, check if the selected size already exists for that item.
            if (cartData[itemId][size]) {
                // If the size exists, increment the quantity by 1
                cartData[itemId][size] += 1
            } else {
                // If the size does not exist, initialize the size with quantity 1
                cartData[itemId][size] = 1
            }
        } else {
            // Step 5: If the item does not exist in the cart, create a new entry for the item and size
            cartData[itemId] = { [size]: 1 } // Initialize the size with quantity 1
        }

        // Step 6: Update the cartItems state with the updated cart data
        setCartItems(cartData)
    }


    const getCartCount = () => {
        let totalCount = 0 // Step 1: Initialize a counter to keep track of the total number of items

        // Step 2: Loop over each item in the cart
        for (const itemId in cartItems) {
            // Step 3: For each item, loop over the sizes (cartItems[itemId] is an object where keys are sizes)
            for (const size in cartItems[itemId]) {
                try {
                    // Step 4: Check if the quantity for the size is greater than 0
                    if (cartItems[itemId][size] > 0) {
                        // Step 5: Add the quantity of this size to the total count
                        totalCount += cartItems[itemId][size]
                    }
                } catch (error) {
                    // Step 6: Catch any errors that occur during the loop (like invalid access)
                    console.error("Error calculating cart count:", error)
                }
            }
        }

        // Step 7: Return the total count of items in the cart
        return totalCount
    }


    useEffect(() => {
        console.log(cartItems)

    }, [cartItems])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const DeliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({})
    
    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error("Please select a size before adding to cart.", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        } 
        else {
            toast.success("Added to cart.", {
              position: "top-left",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
        });
        }

        let cartData = structuredClone(cartItems);
        
        if (itemId in cartData) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
      let count = 0;
      try {
        for (const itemId in cartItems) {
          for (const size in cartItems[itemId]) {
            if (typeof cartItems[itemId][size] === 'number') {
              count += cartItems[itemId][size];
            }
          }
        }
      } catch (error) {
        console.error("Error calculating cart count:", error);
      }
      return count;
    };

    const handleAddToCart = (itemId, size) => {
        if (itemId && size) {
            console.log("Adding to cart:", itemId, size);
            addToCart(itemId, size);
        } else if (!size) {
            alert("Please select a size before adding to cart.");
        } else {
            console.log("Cannot add to cart: Product data not available");
        }
    };

    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItems);
        
        if (itemId in cartData && size in cartData[itemId]) {
            if (cartData[itemId][size] > 1) {
                cartData[itemId][size] -= 1;
            } else {
                delete cartData[itemId][size];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
            setCartItems(cartData);
            toast.info("Removed from cart.", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const updateCartItemCount = (itemId, size, newCount) => {
        let cartData = structuredClone(cartItems);
        
        if (itemId in cartData && size in cartData[itemId]) {
            if (newCount > 0) {
                cartData[itemId][size] = newCount;
            } else {
                delete cartData[itemId][size];
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
            setCartItems(cartData);
            toast.info("Cart updated.", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    useEffect(() => {
        console.log("Current cart:", cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        DeliveryFee,
        search,
        setSearch,
        showSearch,
        setshowSearch,
        cartItems,
        setCartItems,
        addToCart,
        handleAddToCart,
        getCartCount,
        updateCartItemCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

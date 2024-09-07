import { createContext,useEffect,useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const DeliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    
    const addToCart = (itemId, size) => {
        if (!size) {
          console.error('Size is required');
          return;
        }
      
        let cartData = structuredClone(cartItems);
      
        if (cartData[itemId]) {
          if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
          } else {
            cartData[itemId][size] = 1;
          }
        } else {
          cartData[itemId] = {};
          cartData[itemId][size] = 1;
        }
      
        setCartItems(cartData);
        localStorage.setItem('cart', JSON.stringify(cartData)); // Save cart to localStorage
      };
      

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
        addToCart
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

import { createContext,useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const DeliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setshowSearch] = useState(true);

    const value = {
        products,
        currency,
        DeliveryFee,
        search,
        setSearch,
        showSearch,
        setshowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

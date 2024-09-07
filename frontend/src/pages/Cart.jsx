import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemCount, products } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          data.push({
            id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(data);
  }, [cartItems]);

  const handleRemoveFromCart = (productId, size) => {
    removeFromCart(productId, size);
  };

  const handleQuantityChange = (productId, size, change) => {
    const currentQuantity = cartItems[productId]?.[size] || 0;
    const newQuantity = currentQuantity + change;
    
    updateCartItemCount(productId, size, newQuantity);
  };

  return (
    <div className='border-t mt-28 pt-4'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item.id); // Match _id with item ID

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_0.5fr_0.5fr_0.5fr] items-center gap-5'
              >
                <div className='flex items-start gap-6'>
                  <img src={productData.image} className='w-16 sm:w-20' alt={productData.name} />
                  <div>
                    <p className='text-lg font-medium'>{productData.name}</p>
                    <p className='text-gray-500'>{productData.description}</p>
                    <p className='text-gray-500'>Size: {item.size}</p> {/* Display selected size */}
                  </div>
                </div>

                {/* Quantity Control */}
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.size, -1)}
                    className='bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300'
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.size, 1)}
                    className='bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300'
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id, item.size)}
                    className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600'
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

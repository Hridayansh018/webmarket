import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, selectedSize, quantity } = useContext(ShopContext);

  return (
    <div className="mt-24">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* Check if there are any products */}
      <div className="mt-10">
        {products && products.length > 0 ? (
          products.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="py-4 px-6 border-t border-b text-gray-700 hover:bg-gray-100 flex flex-col md:flex-row justify-between gap-4"
            >
              <div className="flex gap-6 items-start text-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h1 className="text-lg font-semibold">{item.name}</h1>
                  {/* Add quantity and size */}
                  <p className="text-gray-600 mt-2">Quantity: 1</p>
                  <p className="text-gray-600">Size: M</p>
                  <div className="flex flex-colr">
                    <p className="text-gray-600">
                      DATE: <span className="font-semibold">26 JULY 2024</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w1/2 flex justify-center">
                <div className="flex gap-2 items-center">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className="text-gray-600">Ready to Ship</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <p className="text-lg font-semibold">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;

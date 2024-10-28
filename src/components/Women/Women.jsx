import React from 'react';
import Banner from '../banner/Banner';
import Newcoll from '../Newcollection/Newcoll'; // Assuming you have this component
import new_dataproduct from '../../assets/Newproducts/newdata';
import { useCart } from '../contexts/CartContext';

function Women({ bannerImage }) {
    const { addToCart } = useCart();
  return (
    <>
      <div className="w-full my-2">
        <Banner imageUrl={bannerImage} className="w-full h-64" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11 w-full max-w-screen-xl my-10 px-4">
        {new_dataproduct
          .filter((item) => item.category === "women's clothing")
          .map((item) => (
            <div
              key={item.id} // Use a unique key
              className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
            >
              <img
                src={item.image}
                className='object-contain h-48 w-full'
                alt={item.title}
              />
              <div className='p-4 flex flex-col flex-grow'>
                <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                <div className='text-gray-600 font-medium mb-1'>{item.category}</div>
                <p className='text-gray-900 font-bold text-lg mb-2'>${item.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(item)} // Ensure addToCart is available in scope
                  className='w-full bg-pink-300 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow-md'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Women;


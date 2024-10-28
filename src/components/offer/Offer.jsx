import React from 'react';
import female from '../../assets/picture/female.jpeg';

const Offer = () => {
  return (
    <div className="w-full max-w-5xl h-auto flex flex-col md:flex-row m-auto px-4 py-10 mb-36 bg-slate-50 shadow-lg rounded-lg">
      <div className="flex flex-col justify-center flex-1 px-4 md:px-8">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold leading-tight">Exclusive</h1>
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold leading-tight">Offers For You</h1>
        <p className="text-gray-600 font-semibold text-lg md:text-xl mt-2">ONLY BEST SELLERS PRODUCTS</p>
        <button className="w-full mx-2 md:w-60 h-12 md:h-16 rounded-full bg-pink-300 hover:bg-pink-500 transition duration-300 ease-in-out text-white text-lg md:text-xl font-medium mt-6 focus:outline-none focus:ring-2 focus:ring-pink-300">
          Check Now
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center md:justify-end pt-6 md:pt-0">
        <img className="h-48 md:h-64 object-cover rounded-lg" src={female} alt="Promotional Image" />
      </div>
    </div>
  );
};

export default Offer;

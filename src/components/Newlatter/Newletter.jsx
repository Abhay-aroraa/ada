import React from 'react'
import { fadeIn } from '../../var'
import {motion} from 'framer-motion'
const Newletter = () => {
    return (
        <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
            div className="flex flex-col mx-4 md:mx-24  items-center justify-center font-sans w-full max-w-5xl px-8 md:px-16 py-12 mb-6  bg-slate-50 rounded-lg shadow-lg">
        <h1 className="text-gray-800 text-4xl md:text-6xl font-bold leading-tigh">Exclusive Offers For You</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Subscribe to our newletter and stay updated!</p>
        <div className="flex justify-center items-center flex-col md:flex-row md:space-x-4 w-full">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 h-12 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button
                type="submit"
                className="mt-4 md:mt-0 p-4 bg-gray-600 text-white rounded-lg hover:bg-black transition duration-300 ease-in-out w-full md:w-auto"
            >
                Subscribe
            </button>
        </div>
    </motion.div>
    
    )
}

export default Newletter
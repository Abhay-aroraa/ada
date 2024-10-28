import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';





        const Banner = ({ imageUrl }) => {
            return (
              <div className="bg-slate-50 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Flat 50% Off</h1>
                  <NavLink
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 text-white bg-pink-300 rounded-md shadow hover:bg-pink-600 transition duration-300 ease-in-out"
                  >
                    Explore Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </NavLink>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <img src={imageUrl} alt="Kids" className="max-w-xs md:max-w-md w-full h-auto rounded-lg shadow-md mx-auto" />
                </div>
              </div>
            );
          }

export default Banner;
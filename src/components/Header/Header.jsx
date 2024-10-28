import { faCartShopping, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import a from '../images/a.jpg'
import './Header.css'

export default function Header() {
    return (
       
 <header className=" login">
            <div className="container">
                <div className='flex '>
                    <img className='img1' src={a} alt="" />
                    <span><h1 class=" hidden items-center text-xl font-bold text-grey-200 py-7 px-2 sm:flex sm:w-auto sm:order-1 ">House of Ada</h1></span> </div>
                <nav class=" space-x-6  lg:flex  md-space-x-2 md:shrink-0 lg:px-6 py-2.5  ">
                    <div className='hidden justify-between items-center w-full md:flex lg:w-auto '>
                        <ul className='flex  mt-4  font-medium  lg:space-x-8  lg:mt-0'>
                            <li className='md:space-x-3'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `text-gray-700 ${isActive ? "text-purple-800 underline" : "text-gray-700"}text-gray-700 hover:text-blue-600 transition`}>
                                    Shop</NavLink>
                            </li>
                            <li >
                                <NavLink
                                    to="/Women"

                                    className={({ isActive }) => `text-gray-700 ${isActive ? "text-purple-800 underline" : "text-gray-700"}  hover:text-blue-600 transition`}>
                                    Women
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                    to="/kids"
                                    className={({ isActive }) => `text-gray-700 ${isActive ? "text-purple-800 underline" : "text-gray-700"}  hover:text-blue-600 transition`}>
                                    Kids
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Item"
                                    className={({ isActive }) => `text-gray-700 ${isActive ? "text-purple-800 underline" : "text-gray-700"}  hover:text-blue-600 transition`}>
                                    Mens
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="flex items-center space-x-1lg:order-2">
                    <button>
                        <NavLink
                            to="/Login"
                            className=' p-4 border-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none    
   ' >login

                        </NavLink>
                    </button>
                    <NavLink
                    to="/Addtocart">
                    <FontAwesomeIcon  className= ' lg:order-1' icon={faCartShopping} />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

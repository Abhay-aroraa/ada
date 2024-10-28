import React from 'react'
import p from '../../assets/p.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'



function Newarrivals() {
    return (
        <>
            <div className=' mt-2 h-1/3 py-16 bg-gray-50'>
                <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
                    <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
                        <div className='md:w-7/12 lg:w-6/12'>
                            <h1 className='mb-8 text-gray-800 text-3xl font-semibold'>NEW ARRIVALS ONLY</h1>

                            <NavLink
                                to="/"
                                className='inline-flex items-center justify-center p-4 text-white bg-pink-300 rounded-md shadow hover:bg-pink-600 transition duration-300 ease-in-out'
                            >
                                Latest Collection <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                            </NavLink>
                        </div>
                        
                            <div className='w-full md:w-5/12 lg:w-6/12 flex justify-center'
                        >
                            <img className='rounded-3xl shadow-lg w-full h-auto' src={p} alt="New Arrivals" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Newarrivals
import React from 'react'
import { Link } from 'react-router-dom';
import a from '../images/a.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../var'

export default function Footer() {
    return (

        <footer class="bg-white sticky py-8">
            <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="container mx-auto px-4">
                <div class="flex flex-col md:flex-row justify-between">
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-lg font-semibold text-gray-800">About Us</h2>
                        <p class="text-gray-600 mt-2">Your go-to store for the latest fashion trends.</p>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-lg font-semibold text-gray-800">Quick Links</h2>
                        <ul class="mt-2">
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Shop</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Contact</a></li>
                            <li><a href="#" class="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-lg font-semibold text-gray-800">Contact Us</h2>
                        <p class="text-gray-600 mt-2">Email: Houseofada@gmail.com</p>
                        <p class="text-gray-600">Phone: (123) 456-7890</p>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="text-lg font-semibold text-gray-800">Follow Us</h2>
                        <div class="flex space-x-4 mt-2">
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-instagram"></i></a>
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="text-center  font-semibold mt-6">
                    <p class="text-gray-600  font-semibold ">© 2024 House of Ada. All rights reserved.</p>
                </div>



                {/* <!-- Add Font Awesome CDN for icons -->
                           */}

            </motion.div>

        </footer>
    );
}
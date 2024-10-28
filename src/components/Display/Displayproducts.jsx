// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDisplay } from '../contexts/DisplayContext';

// const Displayproducts = () => {
//     const { id } = useParams(); // Get the photo ID from the URL
//     const [product, setProduct] = useState(null);
//     const {images, openImages } = useDisplay();
    
//     useEffect(() => {
//         const data_product = [
//             {
//                 id: 1,
//                 title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//                 image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//             },
//             {
//                 id: 2,
//                 title: "Mens Casual Premium Slim Fit T-Shirts",
//                 image: "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&w=600",
//             },
//             {
//                 id: 3,
//                 title: "Mens Cotton Fjallraven yesss Jacket",
//                 image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//             },
//             {
//                 id: 4,
//                 title: "Mens Casual Fjallraven fitss Slim Fit",
//                 image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//             },
//         ];

//         const foundProduct = data_product.find(product=> product.id === parseInt(id));
//         setProduct(foundProduct);
//     }, [id]);

//     if (!product) return <p>Product not found.</p>;

//     return (
//         <div className="flex justify-center items-center h-screen">
//             <img 
//                 src={product.image} 
//                 alt={`Photo of ${product.title}`} 
//                 className="max-w-full max-h-full cursor-pointer p-4" 
//                 onClick={() => openImages(product.image)}
//             />
//         </div>
//     );
// };

// export default Displayproducts;

// import React from 'react';
// import { useCart } from '../contexts/CartContext';

// import { NavLink } from 'react-router-dom';

// const data_product =
//   [
//     {
//       "id": 1,
//       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       "price": 109.95,
//       "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//       "rating": {
//         "rate": 3.9,
//         "count": 120
//       }
//     },
//     {
//       "id": 2,
//       "title": "Mens Casual Premium Slim Fit T-Shirts ",
//       "price": 22.3,
//       "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//       "category": "men's clothing",
//       "image": "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&w=600",
//       "rating": {
//         "rate": 4.1,
//         "count": 259
//       }
//     },
//     {
//       "id": 3,
//       "title": "Mens Cotton Fjallraven yesss Jacket",
//       "price": 55.99,
//       "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//       "rating": {
//         "rate": 4.7,
//         "count": 500
//       }
//     },
//     {
//       "id": 4,
//       "title": "Mens Casual Fjallraven fitss Slim Fit",
//       "price": 15.99,
//       "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//       "category": "men's clothing",
//       "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//       "rating": {
//         "rate": 2.1,
//         "count": 430
//       }
//     }

//   ];

// const Products = () => {
//   const { addToCart } = useCart();



//   return (
//     <>
//       <div className='max-w-screen-xl justify-center mx-auto my-10 p-4'>
//         <h1 className='font-bold text-5xl text-gray-800 mb-5'>POPULAR IN MEN</h1>

//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//           {data_product.map((product) => (
//             <div
//               key={product.id}
//               className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
//             >


//               <NavLink to={`/photo/${product.id}`}>

//                 <img
//                   src={product.image}
//                   className='object-contain h-48 w-full'
//                   alt={product.title}
//                 />
//               </NavLink>


//               <div className='p-4 flex flex-col flex-grow'>
//                 <h2 className='text-lg font-semibold mb-2'>{product.title}</h2>
//                 <div className='text-gray-600 font-medium mb-1'>{product.category}</div>
//                 <p className='text-gray-900 font-bold text-lg mb-2'>${product.price.toFixed(2)}</p>
//                 < button
//                   onClick={() => addToCart(product)}
//                   className='w-full bg-pink-300 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow-md'
//                 >
//                   Add to Cart
//                 </button>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </>
//   );
// }
// export default Products;


import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const data_product =   [
      {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      },
      {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&w=600",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 3,
        "title": "Mens Cotton Fjallraven yesss Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      },
      {
        "id": 4,
        "title": "Mens Casual Fjallraven fitss Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
          "rate": 2.1,
          "count": 430
        }
      }];

const Products = () => {
  const { addToCart } = useCart();
 

  return (
    <div className='max-w-screen-xl justify-center mx-auto my-10 p-4'>
      <h1 className='font-bold text-5xl text-gray-800 mb-5'>POPULAR IN MEN</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data_product.map((product) => (
          <div key={product.id} className='flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
          
             <Link to = {`/product/${product.id}`}> <img src={product.image} className='object-contain h-48 w-full' alt={product.title} /></Link>
            
            <div className='p-4 flex flex-col flex-grow'>
              <h2 className='text-lg font-semibold mb-2'>{product.title}</h2>
              <div className='text-gray-600 font-medium mb-1'>{product.category}</div>
              <p className='text-gray-900 font-bold text-lg mb-2'>${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className='w-full bg-pink-300 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow-md'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Women from './components/Women/Women.jsx';
import Kids from './components/Kids/Kids.jsx';
import Mens from './components/mens/Mens.jsx';
import kid from "../src/assets/picture/kids.jpeg";
import male from './assets/picture/malemodel.jpeg';
import Login from './components/Login/Login.jsx';
import female from './assets/picture/female.jpeg';
import Item from './components/Menitems/Item.jsx';
import Addtocart from './components/Addtocart/Addtocart.jsx';
import Product from './components/Product.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx';
import UserContextProvider from './components/contexts/UserContextProvider.jsx';
import { CartProvider } from './components/contexts/CartContext.jsx';
import  ShopContextProvider from './components/contexts/ShopContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'women',
        element: <Women bannerImage={female} category="women" />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'kids',
        element: <Kids bannerImage={kid} category="kids" />,
      },
      {
        path: 'mens',
        element: <Mens bannerImage={male} category="mens" />,
      },
      {
        path: 'addtocart',
        element: <Addtocart />,
      },
      {
        path: 'item',
        element: <Item />,
      },
      {
        path: 'product/:id',
        element: <Product />, // Changed to use Product component
      },
      {
        path: "/product",
        element: <Product />

     },
      {
        path: '*',
        element: <ErrorBoundary />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <UserContextProvider>
          <ShopContextProvider>
          <RouterProvider router={router} />
        </ShopContextProvider>
      </UserContextProvider>
    </CartProvider>
  </StrictMode>
);

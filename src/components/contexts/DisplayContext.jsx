// import React, { createContext, useState, useContext } from "react";

// const DisplayContext = createContext();

// export const useDisplay = () => {
//     return useContext(DisplayContext);
// };

// export const DisplayProvider = ({ children }) => {
//     const [images, setImages] = useState([]);

//     const openImage = (product) => {
//         setImages((prevImages) => [...prevImages, product]);
//     };

//     return (
//         <DisplayContext.Provider value={{ images, openImage }}>
//             {children}
//         </DisplayContext.Provider>
//     );
// };

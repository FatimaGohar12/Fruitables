import { createContext, useContext, useState } from "react";
// create a Context
const ProductContext = createContext();

// create a context provider
export const ProductProvider = ({children}) => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <ProductContext.Provider value={{ selectedItem, setSelectedItem }}>
          {children}
        </ProductContext.Provider>
      );
    };
    // Create a custom hook for consuming the context
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
  };



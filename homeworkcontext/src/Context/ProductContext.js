import React from "react";
import { MedicineData } from "../Data";
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState(MedicineData);
  const [searchedDatas, setSearchedDatas] = React.useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) => (product.id === id ? updatedProduct : product))
    );
  };

  const searchProduct = (searchTerm) => {
    const searched = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setSearchedDatas(searched);
    };

  const values = {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    searchProduct,
    searchedDatas,
  };

  return (
    <ProductContext.Provider value={values}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

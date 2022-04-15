import React from "react";
import { ProductContext } from "../Context/ProductContext";
const SearchForm = () => {
    const {searchProduct} = React.useContext(ProductContext);

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        searchProduct(e.target.value);
    };
  return (
    <div className="container">
      <h2 className="text-center">Search Medicine</h2>
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search Medicine"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

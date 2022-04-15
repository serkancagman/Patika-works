import React from "react";
import { ProductContext } from "../Context/ProductContext";

const AddForm = () => {
  const { addProduct } = React.useContext(ProductContext);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");

  const randomId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      id: randomId(),
      name,
      price,
      stock,
    });
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Medicine</h2>
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Medicine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Medicine Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            name="stock"
            className="form-control"
            placeholder="Medicine Quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Add Medicine
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;

import React from "react";
import { ProductContext } from "../Context/ProductContext";
const Content = () => {
  const { products, searchedDatas, deleteProduct, updateProduct } =
    React.useContext(ProductContext);


 

      

  return (
    <div className="container">
      <h2 className="text-center">Medicine List</h2>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchedDatas.length > 0
                ? searchedDatas.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Medicine Name"
                          value={product.name}
                          onChange={(e) => updateProduct(product.id, { name: e.target.value,
                            price: product.price,
                            stock: product.stock })}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="price"
                          className="form-control"
                          placeholder="Medicine Price"
                          value={product.price}
                          onChange={(e) => updateProduct(product.id, { price: e.target.value,
                            name: product.name,
                            stock: product.stock })}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="stock"
                          className="form-control"
                          placeholder="Medicine Quantity"
                          value={product.stock}
                          onChange={(e) => updateProduct(product.id, { stock: e.target.value,
                            name: product.name,
                            price: product.price })}
                     
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;

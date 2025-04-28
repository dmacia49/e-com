// /views/products/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchAllProducts } from '../../controllers/productController';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p className="text-center">Loading products...</p>;

  if (errorMsg)
    return <p className="text-red-600 text-center mt-4">{errorMsg}</p>;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Our Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product._id}>
            <div className="card h-100">
                <div className='card-img container' style={{ position: 'relative', height: '200px', padding : '10px'}}> 
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={product.name}
                style={{ objectFit: 'scale-down', height: '200px', objectPosition: '50% 50%'}}
              />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

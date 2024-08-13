import React, { useState, useEffect } from "react";
import "./Shopping.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Shopping = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
   
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let updatedCart = [...cart];

    if (existingItemIndex !== -1) {
     
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!props.api || !props.api.data || !Array.isArray(props.api.data)) {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="shopping-container">
        {props.api.data.map((item, index) => (
          <div key={index} className="card">
            <span className="category">{item.category.toUpperCase()}</span>
            <hr />
            <div className="image">
              <img src={item.image} alt="Product" />
            </div>
            <hr />
            <span className="title">{item.title.slice(0, 44)}...</span>
            <span className="price">Price: &#x24; {item.price}</span>
            <div className="rating">
              <span className="rate">{item.rating.rate} &#9734;</span>
              <span className="review">{item.rating.count} Reviews</span>
            </div>
            <NavLink to="/Cart">
              <button
                className="btn btn-primary add-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      {/* <div className="cart-link">
        <NavLink to="/cart">Go to Cart</NavLink>
      </div> */}
    </div>
  );
};

export default Shopping;

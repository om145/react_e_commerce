import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className="cart">
        <div className="cart-container">
          <header className="cart-header">
            <div className="continue-shopping">
              <NavLink to="/shopping"><img
                className="arrow-img"
                src="../images/arrow.png"
                alt="Arrow img"
              />
              </NavLink>
              <div className="con-shop">Continue Shopping</div>
            </div>
            <div className="cart-icon">
              <img className="cart-img" src="../images/cart.png" alt="cart" />
              <p className="cart-number">{cart.length}</p>
            </div>
          </header>
          <div className="cart-main">
            <div className="cart-main-container">
              {cart.map((item, index) => (
                <div key={index} className="cart-example">
                  <div className="cart-image">
                    <img src={item.image} alt={item.title} />
                  </div> 
                  <div className="cart-title">
                    <span>{item.title.slice(0, 30)}...</span>
                  </div>
                  <div className="cart-price">
                    <span>${item.price}</span>
                  </div>
                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                  <div
                    className="cart-delete"
                    onClick={() => removeFromCart(index)}
                  >
                    <span>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-total">
            <div className="cart-total-container">
              <span>Total</span>
              <div className="total-price">$ {getTotalPrice()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Category.css";
import { NavLink } from 'react-router-dom';

const Category = () => {
  const [cate, setCate] = useState([]);
  const [filteredCate, setFilteredCate] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setCate(res.data);
        setFilteredCate(res.data); //  show all products in starting
      })
      .catch((error) => {
        console.error("error", error);
      });

    // Load cart from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const filterItem = (category) => {
    if (category === 'All') {
      setFilteredCate(cate);
    } else {
      const updatedList = cate.filter((curElem) => curElem.category === category);
      setFilteredCate(updatedList);
    }
  };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    let updatedCart = [...cart];

    if (existingItemIndex !== -1) {
      // If item already in cart, update its quantity
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // Otherwise, add new item with quantity 1
      updatedCart.push({ ...item, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <nav className='cate-navbar'>
        <div className="cate-nav-content">
          <button className="nav-items" onClick={() => filterItem("All")}>All</button>
          <button className="nav-items" onClick={() => filterItem("men's clothing")}>Men's Clothing</button>
          <button className="nav-items" onClick={() => filterItem("jewelery")}>Jewelery</button>
          <button className="nav-items" onClick={() => filterItem("electronics")}>Electronics</button>
          <button className="nav-items" onClick={() => filterItem("women's clothing")}>Women's Clothing</button>
        </div>
      </nav>
      <div className="content">
        {filteredCate.map((item, index) => (
          <div key={index} className="card">
            <span className="category">{item.category.toUpperCase()}</span>
            <hr />
            <div className="image">
              <img src={item.image} alt="Product" />
            </div>
            <hr />
            <span className="title">{item.title.slice(0,44)}...</span>
            <span className="price">Price: &#x24; {item.price}</span>
            <div className="rating">
              <span className="rate">{item.rating.rate} &#9734;</span>
              <span className="review">{item.rating.count} Reviews</span>
            </div>
            <NavLink to="/cart">
            <button className="btn btn-primary add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
            </NavLink>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Category;

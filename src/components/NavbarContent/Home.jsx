import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded
    if (window.bootstrap) {
      console.log("Bootstrap JS is loaded");
    } else {
      console.error("Bootstrap JS is not loaded");
    }
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-header">
          <h1 className="home-main-title">Welcome to PurchasePlaza</h1>
          <p className="home-title">Your one-stop shop for all your needs.</p>
          <NavLink to="/shopping">
            <button className="explore-btn">Explore Now</button>
          </NavLink>
        </div>
        <div className="home-slides">
          <div className="home-slides-container">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button1
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button1>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlJTIwMyUzQTIlMjByYXRpb3xlbnwwfHwwfHx8MA%3D%3D"
                    className="d-block w-100"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://media.istockphoto.com/id/544485688/photo/shopping-cart-and-text.webp?b=1&s=170667a&w=0&k=20&c=yTYL02tz7jGcpxo6GKqGdWn742VJRBhsBcbCqgxiSaw="
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://media.istockphoto.com/id/2157760902/photo/online-shopping-shopping-cart-box-on-balgaria-flag-import-export-finance-commerce.webp?b=1&s=170667a&w=0&k=20&c=eureifEajMewMdLQ6mBI4tUSissfnZOnsdoKuWx-hWo="
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Feature Highlights Section */}
        <div className="home-features">
          <h2 className="home-section-title">Why Shop With Us?</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Wide Selection</h3>
              <p>Find a variety of products across all categories.</p>
            </div>
            <div className="feature-card">
              <h3>Best Prices</h3>
              <p>Get the best deals and discounts on all products.</p>
            </div>
            <div className="feature-card">
              <h3>Fast Shipping</h3>
              <p>Enjoy quick and reliable delivery to your doorstep.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="home-testimonials">
          <h2 className="home-section-title">What Our Customers Say</h2>
          <div className="testimonials-cards">
            <div className="testimonial-card">
              <p>"Amazing shopping experience! Highly recommend PurchasePlaza."</p>
              <h4>- Jane Doe</h4>
            </div>
            <div className="testimonial-card">
              <p>"Great customer service and fast delivery."</p>
              <h4>- John Smith</h4>
            </div>
            <div className="testimonial-card">
              <p>"Wide range of products at unbeatable prices."</p>
              <h4>- Emily Davis</h4>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="home-newsletter">
          <h2 className="home-section-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

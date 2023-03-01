import React from "react";
import bg from "../assets/bg.jpg";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-black border-0">
        <img src={bg} className="card-img" alt="background image" />
        <div className="card-img-overlay d-flex flex-column justify-content-start">
          <div className="container text-center ">
            <h5 className="card-title display-1 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text lead fs">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;

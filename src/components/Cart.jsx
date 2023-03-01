import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = (product) => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);

  const dispatch = useDispatch();

  const ShowProduct = ({ product }) => {
    return (
      <>
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center p-4">
            <img
              height="350px"
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title mb-0">{product.title}</h5>
              <p className="card-text lead fw-bold">${product.price}</p>

              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  dispatch(delCart(product));
                }}
              >
                -
              </button>
              <h2 className="display-0 d-inline "> {product.qty} </h2>
              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  dispatch(addCart(product));
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="contianer  p-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Cart Items</h1>
          </div>
        </div>
        <div className="row d-flex" style={{ gridAutoColumns: "auto" }}>
          {state.map((product, index) => {
            return (
              <div key={index}>
                <ShowProduct product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

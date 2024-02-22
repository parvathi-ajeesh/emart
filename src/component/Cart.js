import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/action/index";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import { addToFavorites } from "../redux/action/index";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  
  const [refresh, setRefresh] = useState();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => {
    return state.favoritesReducer.favorites;
  });

  
  const handleAddToFavorites = (cartItem) => {
    if (!favorites.some((favorite) => favorite.id === cartItem.id)) {
      dispatch(addToFavorites(cartItem));
    }
    console.log("Item added to favorites:", cartItem);
  };

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  function handleButtonAdd(cartItem) {
    if (cartItem.qty >= 0) {
      cartItem.qty++;
    }
    setRefresh(new Date().getSeconds());
  }

  function handleButtonSub(cartItem) {
    if (cartItem.qty > 1) {
      cartItem.qty--;
    }
    setRefresh(new Date().getSeconds());
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>

          <div className="row">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} x ${cartItem.price}=$
                {cartItem.qty * cartItem.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButtonSub(cartItem)}
              >
                <i className="fa fa-minus"></i>
              </button>

              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButtonAdd(cartItem)}
              >
                <i className="fa fa-plus"></i>
              </button>

              <button
                className="btn btn-outline-dark"
                onClick={() => handleAddToFavorites(cartItem)}
              >
                <i className="fa fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
        <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;

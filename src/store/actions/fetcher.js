import axios from "axios";

import { GET_PRODUCTS } from "./types";

// Fetching products
export const getProducts = () => (dispatch) => {
  axios
    .get(
      "https://sw-coding-challenge.herokuapp.com/api/v1/products",
      tokenConfig()
    )
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    });
};
// fetching notifications
export const getNotifications = () => (dispatch, getState) => {
  axios
    .get(
      "https://sw-coding-challenge.herokuapp.com/api/v1/notifications",
      tokenConfig(getState)
    )
    .then((res) => {
      // dispatch({
      //   type: GET_PRODUCTS,
      //   payload: res.data,
      // });
    });
};
export const tokenConfig = () => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  config.headers[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs`;

  return config;
};

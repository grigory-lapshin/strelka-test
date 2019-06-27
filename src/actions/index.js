import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../reducers/actionTypes';

/* eslint-disable import/prefer-default-export */

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id,
});

export const checkout = () => ({ type: CHECKOUT });

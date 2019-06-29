import productsJSON from '../assets/products.json';
import { SHOW_PRODUCT_PAGE } from './actionTypes';

const n = 12;
const pagesIndexes = [...Array(Math.ceil(productsJSON.length / n)).keys()];
const pages = pagesIndexes.reduce(
  (acc, _, i) => ({ ...acc, [i]: productsJSON.slice(i * n, i * n + n) }),
  {},
);
const byId = productsJSON.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

const initialState = {
  currentPage: 0,
  pagesIndexes,
  pages,
  byId,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_PAGE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
};

export const getProduct = (state, id) => state.byId[id];

export default products;

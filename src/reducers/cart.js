/* eslint-disable no-shadow */
import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from './actionTypes';

const initialState = { addedIds: [], quantityById: {} };

export const getQuantity = (state, id) => state.quantityById[id] || 0;

export const getAddedIds = state => state.addedIds;

const cart = ({ addedIds, quantityById } = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (addedIds.indexOf(action.id) !== -1) {
        return {
          addedIds,
          quantityById: { ...quantityById, [action.id]: (quantityById[action.id] || 0) + 1 },
        };
      }
      return {
        addedIds: [...addedIds, action.id],
        quantityById: { ...quantityById, [action.id]: 1 },
      };
    case REMOVE_FROM_CART:
      if (addedIds.indexOf(action.id) === -1) {
        return { addedIds, quantityById };
      }
      if (quantityById[action.id] && quantityById[action.id] === 1) {
        return {
          addedIds: addedIds.filter(i => i !== action.id),
          quantityById: { ...quantityById, [action.id]: undefined },
        };
      }
      return {
        addedIds,
        quantityById: { ...quantityById, [action.id]: quantityById[action.id] - 1 },
      };
    case CHECKOUT:
      return initialState;
    default:
      return { addedIds, quantityById };
  }
};

export default cart;

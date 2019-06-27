import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const initialState = { addedIds: [], quantityById: {} };

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.id) !== -1) {
        return state;
      }
      return [...state, action.id];
    case REMOVE_FROM_CART:
      if (state.indexOf(action.id) === -1) {
        return state;
      }
      return [...state.filter(i => i !== action.id)];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.id]: (state[action.id] || 0) + 1 };
    case REMOVE_FROM_CART:
      if (state[action.id] <= 1) {
        return { ...state, [action.id]: 0 };
      }
      return { ...state, [action.id]: (state[action.id] || 0) - 1 };
    default:
      return state;
  }
};

export const getQuantity = (state, id) => state.quantityById[id] || 0;

export const getAddedIds = state => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;

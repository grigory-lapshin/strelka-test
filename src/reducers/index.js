import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT_REQUEST } from './actionTypes';

const initialState = { addedIds: [], quantityById: {} };

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.id) !== -1) {
        return state;
      }
      return [...state, action.id];
    // case REMOVE_FROM_CART:
    //   if (state.indexOf(action.id) === -1) {
    //     return state;
    //   }
    //   return [...state.filter(i => i !== action.id)];
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

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;

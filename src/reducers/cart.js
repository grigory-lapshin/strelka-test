/* eslint-disable no-case-declarations */
const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.indexOf(action.id) !== -1) {
        return state;
      }
      return [...state, action.id];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id } = action;
      return { ...state, [id]: (state[id] || 0) + 1 };
    default:
      return state;
  }
};

export const getQuantity = (state, id) => state.quantityById[id] || 0;

export const getAddedIds = state => state.addedIds;

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState;
    case 'CHECKOUT_FAILURE':
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;

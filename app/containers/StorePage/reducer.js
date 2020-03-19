/*
 *
 * StorePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  PURCHASE_PET,
  PURCHASE_PET_SUCCESS,
  LOAD_PETS,
  LOAD_PETS_SUCCESS,
} from './constants';

export const initialState = { pets: [] };

/* eslint-disable default-case, no-param-reassign */
const storePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PURCHASE_PET:
        break;
      case PURCHASE_PET_SUCCESS:
        draft.inventory.push(action.pet);
        break;
      case LOAD_PETS:
        draft.pets = [];
        break;
      case LOAD_PETS_SUCCESS:
        draft.pets = action.pets;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default storePageReducer;

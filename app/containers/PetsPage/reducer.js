/*
 *
 * PetsPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, FEED_PET, FEED_PET_SUCCESS } from './constants';

export const initialState = {
  pets: [
    { id: 0, name: 'Dragon Pet', type: 'Dragon', health: 10 },
    { id: 1, name: 'Tiger Pet', type: 'Tiger', health: 10 },
    { id: 2, name: 'Angel Pet', type: 'Angel', health: 10 },
    { id: 3, name: 'Demon Pet', type: 'Demon', health: 10 },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const petsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FEED_PET:
        break;
      case FEED_PET_SUCCESS:
        draft.pets = action.pets;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default petsPageReducer;

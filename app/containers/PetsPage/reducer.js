/*
 *
 * PetsPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  pets: [
    { id: 1, name: 'Dragon Pet', type: 'Dragon', health: 10 },
    { id: 2, name: 'Tiger Pet', type: 'Tiger', health: 10 },
    { id: 3, name: 'Angel Pet', type: 'Angel', health: 10 },
    { id: 4, name: 'Demon Pet', type: 'Demon', health: 10 },
  ],
};

/* eslint-disable default-case, no-param-reassign */
const petsPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case 'feed':
        console.log('Fed pet');
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default petsPageReducer;

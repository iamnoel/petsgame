/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  ADD_PET_INVENTORY,
  ADD_PET_INVENTORY_SUCCESS,
  LOAD_PET_INVENTORY,
  LOAD_PET_INVENTORY_SUCCESS,
  FEED_PET,
  FEED_PET_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  inventory: [],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case ADD_PET_INVENTORY:
        break;

      case ADD_PET_INVENTORY_SUCCESS:
        console.log("Success");
        break;

      case LOAD_PET_INVENTORY:
        console.log("Loading pets");
        draft.inventory = [];
        break;

      case LOAD_PET_INVENTORY_SUCCESS:
        console.log('The pets are');
        console.log(action.pets);
        draft.inventory = action.pets;
        break;

      case FEED_PET:
        console.log("Feed pet");
        break;

      case FEED_PET_SUCCESS:
        console.log("Feed pet success");
        draft.inventory.find(pet => pet._id === action.id).health += 1;
        break;
    }
  });

export default appReducer;

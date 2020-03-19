/*
 *
 * PetsPage actions
 *
 */

import { DEFAULT_ACTION, FEED_PET, FEED_PET_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function feedPet(id) {
  return {
    type: FEED_PET,
    payload: id,
  };
}

export function feedPetSuccess(pets) {
  return {
    type: FEED_PET_SUCCESS,
    pets,
  };
}

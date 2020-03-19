/*
 *
 * StorePage actions
 *
 */

import { DEFAULT_ACTION, PURCHASE_PET, PURCHASE_PET_SUCCESS, LOAD_PETS, LOAD_PETS_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function purchasePet(id) {
  return {
    type: PURCHASE_PET,
    id,
  };
}

export function purchasePetSuccess(pet) {
  return {
    type: PURCHASE_PET_SUCCESS,
    pet,
  };
}

export function loadPets() {
  return {
    type: LOAD_PETS,
  };
}

export function loadPetsSuccess(pets) {
  return {
    type: LOAD_PETS_SUCCESS,
    pets,
  };
}

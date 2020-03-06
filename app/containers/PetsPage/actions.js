/*
 *
 * PetsPage actions
 *
 */

import { DEFAULT_ACTION, FEED_PET } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function feedPet() {
  return {
    type: FEED_PET,
  };
}

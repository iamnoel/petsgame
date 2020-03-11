import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the petsPage state domain
 */

const selectPetsPageDomain = state => state.petsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PetsPage
 */

const makeSelectPetsPage = () =>
  createSelector(
    selectPetsPageDomain,
    substate => substate.pets,
  );

export default makeSelectPetsPage;
export { selectPetsPageDomain };

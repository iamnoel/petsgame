import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the storePage state domain
 */

const selectStorePageDomain = state => state.storePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StorePage
 */

const makeSelectStorePage = () =>
  createSelector(
    selectStorePageDomain,
    substate => substate.pets,
  );

export default makeSelectStorePage;
export { selectStorePageDomain };

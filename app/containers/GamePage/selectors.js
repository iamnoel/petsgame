import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the gamePage state domain
 */

const selectGamePageDomain = state => state.gamePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GamePage
 */

const makeSelectGamePage = () =>
  createSelector(
    selectGamePageDomain,
    substate => substate,
  );

export default makeSelectGamePage;
export { selectGamePageDomain };

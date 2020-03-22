/*
 *
 * RegisterPage reducer
 *
 */
import produce, { isDraft } from 'immer';
import {
  DEFAULT_ACTION,
  SET_INPUTS,
  ON_SUBMIT,
  ON_SUBMIT_SUCCESS,
  ON_SUBMIT_FAIL,
} from './constants';

export const initialState = { inputs: {} };

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_INPUTS:
        console.log(`${action.name}: ${action.value}`);
        console.log(state.inputs);
        draft.inputs[action.name] = action.value;
        break;
      case ON_SUBMIT:
        console.log('Submitted');
        break;
      case ON_SUBMIT_SUCCESS:
        draft.inputs = {}
        console.log('Successfully registered');
        break;
      case ON_SUBMIT_FAIL:
        console.log('Submit failed');
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default registerPageReducer;

/*
 *
 * RegisterPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_INPUTS,
  ON_SUBMIT,
  ON_SUBMIT_SUCCESS,
  ON_SUBMIT_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setInputs(name, value) {
  return {
    type: SET_INPUTS,
    name,
    value,
  };
}

export function onSubmit(name, email, password) {
  return {
    type: ON_SUBMIT,
    name,
    email,
    password,
  };
}

export function onSubmitSuccess(user) {
  return {
    type: ON_SUBMIT_SUCCESS,
    user,
  };
}

export function onSubmitFail() {
  return {
    type: ON_SUBMIT_FAIL,
  };
}

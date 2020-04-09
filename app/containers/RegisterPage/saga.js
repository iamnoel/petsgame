import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { DEV_API_URL } from 'containers/App/constants';
import { onSubmitSuccess, onSubmitFail } from './actions';
import { ON_SUBMIT } from './constants';

export function* onSubmitSaga(action) {
  const state = yield select();
  const newUser = {
    name: state.registerPage.inputs.name,
    email: state.registerPage.inputs.email,
    password: state.registerPage.inputs.password,
  };
  try {
    console.log(newUser);
    const user = yield call(request, `${DEV_API_URL}/users/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    // const user = yield call(request, `${DEV_API_URL}/users`, { method: 'POST' });
    yield put(onSubmitSuccess(user));
  } catch (err) {
    console.log(err);
    yield put(onSubmitFail());
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeLatest(ON_SUBMIT, onSubmitSaga);
}

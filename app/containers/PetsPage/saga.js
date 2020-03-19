import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { FEED_PET } from './constants';
import { feedPetSuccess } from './actions';

export function* feedPetSaga() {
  try {
    // Call our request helper (see 'utils/request')
    const pets = yield call(request, `https://dev-api-petsgame.herokuapp.com/pets`);
    yield put(feedPetSuccess(pets.pets));
  } catch (err) {
    const pets = [{ id: 0, name: 'Fail Pet', type: 'Failure', health: 9 }];
    yield put(feedPetSuccess(pets));
  }
}
// Individual exports for testing
export default function* petsPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(FEED_PET, feedPetSaga);
}

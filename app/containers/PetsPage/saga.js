import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { FEED_PET } from './constants';
import { feedPetSuccess } from './actions';

export function* feedPetSaga() {
  try {
    // Call our request helper (see 'utils/request')
    const pets = [
      { id: 0, name: 'Success Pet', type: 'Sucessor', health: 1000 },
    ];
    yield put(feedPetSuccess(pets));
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

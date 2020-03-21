import {
  take,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';
// import { FEED_PET } from './constants';
// import { feedPetSuccess } from './actions';
import {
  FEED_PET,
  DEV_INVENTORY_ID,
  LOAD_PET_INVENTORY,
} from 'containers/App/constants';
import {
  feedPetSuccess,
  loadPetInventorySuccess,
} from 'containers/App/actions';

export function* feedPetSaga(action) {
  try {
    console.log('Feed saga');
    console.log(action.id);
    yield put(feedPetSuccess(action.id));
  } catch (err) {
    console.log(err);
  }
}

export function* loadPetSaga() {
  const pets = yield call(
    request,
    `https://dev-api-petsgame.herokuapp.com/inventories/${DEV_INVENTORY_ID}/pets`,
  );
  console.log(pets);
  yield put(loadPetInventorySuccess(pets.pets));
}
// Individual exports for testing
export default function* petsPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(FEED_PET, feedPetSaga);
  yield takeLatest(LOAD_PET_INVENTORY, loadPetSaga);
}

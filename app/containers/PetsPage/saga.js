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
  DEV_API_URL,
  LOAD_PET_INVENTORY,
} from 'containers/App/constants';
import {
  feedPetSuccess,
  loadPetInventorySuccess,
} from 'containers/App/actions';

export function* feedPetSaga(action) {
  try {
    const pet = yield call(request, `${DEV_API_URL}/pets/${action.id}/feed`);
    yield put(feedPetSuccess(pet));
  } catch (err) {
    console.log(err);
  }
}

export function* loadPetSaga() {
  const pets = yield call(
    request,
    `${DEV_API_URL}/inventories/${DEV_INVENTORY_ID}/pets`,
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

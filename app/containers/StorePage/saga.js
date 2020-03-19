import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_PETS } from './constants';
import { loadPetsSuccess } from './actions';

export function* loadStoreSaga() {
  try {
    const pets = yield call(request, `https://dev-api-petsgame.herokuapp.com/pets`);
    yield put(loadPetsSuccess(pets.pets));
  } catch (err) {
    const pets = [{ id: 0, name: 'Fail Pet', type: 'Failure', health: 9 }];
    yield put(loadPetsSuccess(pets));
  }
}

// Individual exports for testing
export default function* storePageSaga() {
  yield takeEvery(LOAD_PETS, loadStoreSaga);
}

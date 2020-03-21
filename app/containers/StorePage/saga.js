import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { ADD_PET_INVENTORY, DEV_INVENTORY_ID } from 'containers/App/constants';
import { addPetInventorySuccess } from 'containers/App/actions';
import { LOAD_PETS, PURCHASE_PET } from './constants';
import { loadPetsSuccess, purchasePetSuccess } from './actions';

export function* loadStoreSaga() {
  try {
    const pets = yield call(
      request,
      `https://dev-api-petsgame.herokuapp.com/pets`,
    );
    yield put(loadPetsSuccess(pets.pets));
  } catch (err) {
    const pets = [{ id: 0, name: 'Fail Pet', type: 'Failure', health: 9 }];
    yield put(loadPetsSuccess(pets));
  }
}

export function* purchasePet(action) {
  const pet = yield call(
    request,
    `https://dev-api-petsgame.herokuapp.com/inventories/${DEV_INVENTORY_ID}/pets/${action.id}`,
    { method: 'POST' },
  );
  yield put(addPetInventorySuccess(pet.pet));
}

// Individual exports for testing
export default function* storePageSaga() {
  yield takeEvery(LOAD_PETS, loadStoreSaga);
  yield takeEvery(ADD_PET_INVENTORY, purchasePet);
}

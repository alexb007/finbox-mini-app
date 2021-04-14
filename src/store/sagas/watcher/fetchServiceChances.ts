import { takeLatest } from 'redux-saga/effects';
import { LOAD_CHANCES } from '../../constants/chances';
import { fetchServiceChances } from '../worker/fetchServiceChances';

export function* fetchServiceChancesWatcher() {
  try {
      yield takeLatest(LOAD_CHANCES, fetchServiceChances);
  } catch (e) {

  }
}

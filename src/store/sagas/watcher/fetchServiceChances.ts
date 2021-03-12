import { takeLatest } from 'redux-saga/effects';
import { LOAD_CHANCES } from '../../constants/chances';
import { fetchServiceChances } from '../worker/fetchServiceChances';

export function* fetchServiceChancesWatcher() {
  yield takeLatest(LOAD_CHANCES, fetchServiceChances);
}

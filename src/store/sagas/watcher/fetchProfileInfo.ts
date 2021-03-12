import { takeLatest } from 'redux-saga/effects';
import {FETCH_CONTACTS, FETCH_PROFILE_INFO, FETCH_EMAIL, FETCH_PHONE} from '../../constants/user';
import {fetchContactsWorker, fetchProfileInfoWorker, fetchPhoneWorker, fetchEmailWorker} from '../worker/fetchProfileInfo';

export function* fetchProfileInfoWatcher() {
  yield takeLatest(FETCH_PROFILE_INFO, fetchProfileInfoWorker);
}

export function* fetchContactsWatcher() {
  yield takeLatest(FETCH_CONTACTS, fetchContactsWorker);
}

export function* fetchPhoneWatcher() {
  yield takeLatest(FETCH_PHONE, fetchPhoneWorker);
}


export function* fetchEmailWatcher() {
  yield takeLatest(FETCH_EMAIL, fetchEmailWorker);
}
import { takeLatest } from 'redux-saga/effects';
import { FETCH_FRIENDS } from '../../constants/friends';
import { fetchFriendsWorker } from '../worker/fetchFriends';

export function* fetchFriendsWatcher() {
  yield takeLatest(FETCH_FRIENDS, fetchFriendsWorker);
}

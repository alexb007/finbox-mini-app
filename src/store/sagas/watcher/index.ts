import {all} from 'redux-saga/effects';
import {fetchAccessTokenWatcher} from './fetchAccessToken';
import {fetchFriendsWatcher} from './fetchFriends';
import {fetchContactsWatcher, fetchProfileInfoWatcher, fetchPhoneWatcher, fetchEmailWatcher} from "./fetchProfileInfo";
import {fetchServiceChancesWatcher} from "./fetchServiceChances";

export default function* watcher() {
    yield all([
        fetchAccessTokenWatcher(),
        fetchFriendsWatcher(),
        fetchProfileInfoWatcher(),
        fetchContactsWatcher(),
        fetchPhoneWatcher(),
        fetchEmailWatcher(),
        fetchServiceChancesWatcher(),
    ]);
}

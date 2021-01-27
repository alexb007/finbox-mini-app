import {put, call} from 'redux-saga/effects';
import bridge from '@vkontakte/vk-bridge';
import {ISetFriendsAction} from '../../actions/friends/types';
import {SET_FRIENDS} from '../../constants/friends';
import {store} from "../..";
import {fetchAccessTokenWorker} from "./fetchAccessToken";

export function* fetchFriendsWorker() {
    let access_token = store.getState().user.access_token
    if (access_token === '') {
        yield call(fetchAccessTokenWorker)
        access_token = store.getState().user.access_token
    }
    const data = yield bridge.send('VKWebAppCallAPIMethod', {
        method: 'friends.get',
        params: {
            order: 'hints',
            fields: 'nickname,photo_100',
            v: '5.21',
            access_token: access_token
        }
    }).catch(() => {

    });

    yield put<ISetFriendsAction>({
        type: SET_FRIENDS,
        payload: {
            friends: {
                list: data.response.items,
                loading: false
            },
        }
    });
}

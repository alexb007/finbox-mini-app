import {put} from 'redux-saga/effects';
import bridge from '@vkontakte/vk-bridge';
import {ISetUserAccessTokenAction} from '../../actions/user/types';
import {SET_ACCESS_TOKEN} from '../../constants/user';

export function* fetchAccessTokenWorker() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const appId = urlParams.get('vk_app_id');

    const response = yield bridge.send('VKWebAppGetAuthToken', {
        'app_id': Number(appId),
        'scope': 'friends'
    }).catch(() => {
        alert('Произошло критическая ошибка. Пожалуйста, перезагрузите приложение.')
    });

    yield put<ISetUserAccessTokenAction>({
        type: SET_ACCESS_TOKEN,
        payload: {
            user: {
                access_token: response.access_token
            }
        }
    });
}

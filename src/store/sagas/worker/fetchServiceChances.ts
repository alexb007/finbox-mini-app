import {call, put} from 'redux-saga/effects';
import {
    ILoadChancesAction,
    ISetChancesAction,
    ISetLoadingAction,
    ISetServicesCountAction
} from '../../actions/chances/types';
import {
    SET_CHANCES,
    SET_LOADING,
    SET_ACTIVE_SERVICE,
    CHANCE_URL,
    BACKEND_URL,
    SET_SERVICES_COUNT
} from '../../constants/chances';
import IService from "../../types/service";

function fetchChance(user: number, service: number, amount: number, email: string) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user,
            service,
            amount,
            email
        })
    }
    return fetch(CHANCE_URL, requestOptions);
}

export function* fetchServiceChances(action: ILoadChancesAction) {
    yield put<ISetLoadingAction>({
        type: SET_LOADING,
        payload: {
            loading: true
        }
    })
    let chances = []
    try {
        const response = yield call(fetch, BACKEND_URL, {mode: "cors"})
        const services: Map<string, IService> = yield response.json()
        const servicesList = yield Object.values(services);
        yield put<ISetServicesCountAction>({
            type: SET_SERVICES_COUNT,
            payload: {
                services_count: servicesList.length,
            }
        })
        for (const [key, loading_service] of Object.entries(services)) {
            try {
                yield put({
                    type: SET_ACTIVE_SERVICE,
                    payload: {
                        loading_service
                    },
                })
                const chanceResponse = yield call(fetchChance, action.payload.user, loading_service.id, action.payload.amount, action.payload.email);
                const chance = yield chanceResponse.json()
                chances.push(chance);
            } catch (e) {
                console.log(e)
            }
        }

        yield put<ISetChancesAction>({
            type: SET_CHANCES,
            payload: {
                chances: chances,
                loading_service: null,
                progress: 0,
                services_count: services.size,
                page: {
                    id: 2,
                    title: "Предложения партнёров"
                },
                loading: false
            }
        })
        yield put<ISetLoadingAction>({
            type: SET_LOADING,
            payload: {
                loading: false
            }
        })
    } finally {
        yield put<ISetLoadingAction>({
            type: SET_LOADING,
            payload: {
                loading: false,

            }
        })
    }


}

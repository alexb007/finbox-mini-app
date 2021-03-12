import * as constants from '../../constants/chances';
import {ISetChancesAction} from '../../actions/chances/types';
import {IChancesState} from './types';
import {IState} from "../../types/state";
import {ISelectionPage} from "../../types/chance";

const initialPage: ISelectionPage = {
    id: 0,
    title: "Подбор займа"
}

const initialState: IChancesState = {
    chances: [],
    page: initialPage,
    loading_service: null,
    services_count: 0,
    progress: 0,
    loading: false,
};

/**
 * The friends reducer.
 *
 * @param state
 * @param action
 */
export function chancesReducer(state = initialState, action: ISetChancesAction) {
    switch (action.type) {
        case constants.SET_CHANCES: {
            return action.payload;
        }

        case constants.SET_LOADING: {
            return {
                ...state,
                loading: action.payload.loading,
                progress: 0,
                page: (action.payload.loading) ? {id: 1, title: "Подбор займа"} : {
                    id: 2, title: "Предложения партнёров"
                }
            };
        }

        case constants.SET_SERVICES_COUNT: {
            return {...state, services_count: action.payload.services_count}
        }

        case constants.SET_ACTIVE_SERVICE: {
            return {...state, loading_service: action.payload.loading_service, progress: state.progress + 1};
        }

        case constants.LOAD_CHANCES: {
            return state;
        }

        default:
            return state;
    }
}

/**
 * The function return chances state.
 *
 * @param state
 */
export const getChancesState = (state: IState) => state.chances;

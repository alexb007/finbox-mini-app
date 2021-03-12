import * as constants from '../../constants/user';
import {UserAction} from '../../actions/user/types';
import {IUserState} from './types';
import {IState} from "../../types/state";

const initialState: IUserState = {
    id: undefined,
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    access_token: '',
};

/**
 * The user reducer.
 *
 * @param state
 * @param action
 */
export function userReducer(state = initialState, action: UserAction) {
    switch (action.type) {
        case constants.SET_USER:
        case constants.SET_ACCESS_TOKEN: {
            return {...state, ...action.payload.user};
        }

        default:
            return state;
    }
}

/**
 * The function return user state.
 *
 * @param state
 */
export const getUserState = (state: IState) => state.user;

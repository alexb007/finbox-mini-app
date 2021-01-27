import * as constants from '../../constants/friends';
import {FriendsAction} from '../../actions/friends/types';
import {IFriendsState} from './types';
import {IState} from "../../types/state";
import {IFriendOption} from "../../../modals/AddDebt/types";
import {getUserName} from "../../../utils";

const initialState: IFriendsState = {
    list: [],
    loading: false,
};

/**
 * The friends reducer.
 *
 * @param state
 * @param action
 */
export function friendsReducer(state = initialState, action: FriendsAction) {
    switch (action.type) {
        case constants.SET_FRIENDS: {
            return action.payload.friends;
        }

        default:
            return state;
    }
}

/**
 * The function return friends state.
 *
 * @param state
 */
export const getFriendsState = (state: IState) => state.friends;

/**
 * The function return friends as select options
 *
 * @param state
 */
export const getFriendsOptions = (state: IState) => {
    let options: IFriendOption[] = [
        {value: -1, label: 'Не выбрано'}
    ];

    state.friends.list.forEach((friend) => {
        options.push({
            value: friend.id,
            label: getUserName(friend.first_name, friend.last_name),
            photo_100: friend.photo_100
        });
    });
    return options
}

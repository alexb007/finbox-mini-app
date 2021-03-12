import * as constants from '../../constants/user';
import {IUser} from '../../types/user';

/**
 * The set user access token action interface.
 */
export interface ISetUserAccessTokenAction {
    type: typeof constants.SET_ACCESS_TOKEN;
    payload: {
        user: {
            access_token: string | number;
        };
    };
}

/**
 * The set user action interface.
 */
export interface ISetUserAction {
    type: typeof constants.SET_USER;
    payload: {
        user: {
            id?: number | undefined;
            first_name?: string | undefined
            last_name?: string | undefined
            phone?: string | null
            email?: string | null
        };
    };
}

/**
 * The fetch access token action interface.
 */
export interface IFetchAccessTokenAction {
    type: typeof constants.FETCH_ACCESS_TOKEN;
}

/**
 * The fetch profile info action interface.
 */
export interface IFetchProfileInfoAction {
    type: typeof constants.FETCH_PROFILE_INFO;
}

/**
 * The fetch profile info action interface.
 */
export interface IFetchContactsAction {
    type: typeof constants.FETCH_CONTACTS;
}

/**
 * The fetch user email action interface.
 */
export interface IFetchEmailAction {
    type: typeof constants.FETCH_EMAIL;
}


/**
 * The fetch user phone action interface.
 */
export interface IFetchPhoneAction {
    type: typeof constants.FETCH_PHONE;
}


/**
 * User user action type.
 */
export type UserAction =
    ISetUserAction
    | IFetchAccessTokenAction
    | ISetUserAccessTokenAction
    | IFetchProfileInfoAction
    | IFetchContactsAction
    | IFetchEmailAction
    | IFetchPhoneAction;

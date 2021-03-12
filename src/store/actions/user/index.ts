import * as constants from '../../constants/user';
import { ISetUserAction, UserAction } from './types';

/**
 * The set user action.
 *
 * @param payload
 */
export function setUser(payload: ISetUserAction['payload']): UserAction {
  return {
    type: constants.SET_USER,
    payload
  };
}

/**
 * Fetch user profile info action
 *
 * @param payload
 */
export function fetchProfileInfo(): UserAction {
  return {
    type: constants.FETCH_PROFILE_INFO,
  };
}

/**
 * Fetch user profile info action
 *
 * @param payload
 */
export function fetchContacts(): UserAction {
  return {
    type: constants.FETCH_CONTACTS,
  };
}

/**
 * Fetch user phone action
 *
 * @param payload
 */
export function fetchPhone(): UserAction {
  return {
    type: constants.FETCH_PHONE,
  };
}

/**
 * Fetch user email action
 *
 * @param payload
 */
export function fetchEmail(): UserAction {
  return {
    type: constants.FETCH_EMAIL,
  };
}

/**
 * The fetch access token action.
 */
export function fetchAccessToken(): UserAction {
  return {
    type: constants.FETCH_ACCESS_TOKEN,
  };
}

import * as constants from '../../constants/chances';
import {
  ISetChancesAction,
  ChancesAction,
  ISetLoadingAction,
  ISetCurrentServiceAction,
  ILoadChancesAction
} from './types';

/**
 * The fetch friends action.
 */
export function fetchChances(payload: ILoadChancesAction['payload']): ChancesAction {
  return {
    type: constants.LOAD_CHANCES,
    payload
  };
}

export function setActiveService(payload: ISetCurrentServiceAction['payload']): ChancesAction {
  return {
    type: constants.SET_ACTIVE_SERVICE,
    payload
  };
}

/**
 * The set friends action.
 */
export function setChances(payload: ISetChancesAction['payload']): ChancesAction {
  return {
    type: constants.SET_CHANCES,
    payload
  };
}

export function setLoading(payload: ISetLoadingAction['payload']): ChancesAction {
  return {
    type: constants.SET_LOADING,
    payload
  }
}

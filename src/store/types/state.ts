import { IUserState } from '../reducers/user/types';
import { IFriendsState } from "../reducers/friends/types";
import {IChancesState} from "../reducers/chances/types";
import {ISelectionFormState} from "../reducers/selection/types";

/**
 * The state interface.
 */
export interface IState {
  user: IUserState;
  friends: IFriendsState;
  chances: IChancesState;
  selectionForm: ISelectionFormState;
}

import {combineReducers} from 'redux';
import {IState} from '../types/state';

/**
 * Reducer's.
 */
import {userReducer} from './user';
import {friendsReducer} from "./friends";
import {chancesReducer} from "./chances";
import {selectionFormReducer} from "./selection";

/**
 * The root reducer.
 */
export default combineReducers<IState>({
    user: userReducer,
    friends: friendsReducer,
    chances: chancesReducer,
    selectionForm: selectionFormReducer
})

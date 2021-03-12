import * as constants from '../../constants/selection';
import {ISelectionFormState} from './types';
import {IState} from "../../types/state";
import {IUpdateFormValuesAction} from "../../actions/selection/types";

const initialState: ISelectionFormState = {
    sum: 5000,
    fullname: "",
    email: "",
    phone: "+7"
};

/**
 * The update selection form reducer.
 *
 * @param state
 * @param action
 */
export function selectionFormReducer(state = initialState, action: IUpdateFormValuesAction) {
    switch (action.type) {
        case constants.UPDATE_FORM_VALUES: {
            return {
                ...state,
                ...action.payload
            };
        }

        default:
            return state;
    }
}

/**
 * The function return selection form state.
 *
 * @param state
 */
export const getSelectionFormState = (state: IState) => state.selectionForm;

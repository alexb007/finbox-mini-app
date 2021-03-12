import * as constants from "../../constants/selection";
import {IUpdateFormValuesAction, SelectionAction} from "./types";

/**
 * The set user action.
 *
 * @param payload
 */
export function updateFormValues(payload: IUpdateFormValuesAction['payload']): SelectionAction {
  return {
    type: constants.UPDATE_FORM_VALUES,
    payload
  };
}

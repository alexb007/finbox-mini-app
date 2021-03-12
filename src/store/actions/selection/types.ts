import * as constants from '../../constants/selection';

/**
 * The update form values action interface.
 */
export interface IUpdateFormValuesAction {
    type: typeof constants.UPDATE_FORM_VALUES;
    payload: {
        sum?: number;
        fullname?: string | null;
        email?: string | null;
        phone?: string | null;
    }
}

/**
 * User user action type.
 */
export type SelectionAction =
    IUpdateFormValuesAction;

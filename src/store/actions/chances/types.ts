import * as constants from '../../constants/chances';
import IChance, {ISelectionPage} from "../../types/chance";
import IService from "../../types/service";

/**
 * The fetch friends action interface.
 */
export interface IFetchChancesAction {
    type: typeof constants.LOAD_CHANCES;
}

/**
 * The fetch set friends action interface.
 */
export interface ISetChancesAction {
    type: String;
    payload: {
        chances: IChance[];
        page: ISelectionPage,
        loading_service: IService | null,
        progress: number,
        services_count: number,
        loading: boolean;
    };
}

export interface ISetServicesCountAction {
    type: String;
    payload: {
        services_count: number
    };
}

export interface ILoadChancesAction {
    type: String;
    payload: {
        amount: number,
        user: number,
        email: string,
        phone: string,
    };
}

export interface ISetCurrentServiceAction {
    type: String;
    payload: {
        loading_service: IService,
    };
}

export interface IGetChancesAction {
    type: typeof constants.SET_CHANCES;
}


export interface ISetLoadingAction {
    type: typeof constants.SET_LOADING;
    payload: {
        loading: boolean
    };
}

/**
 * Friends action type.
 */
export type ChancesAction =
    IFetchChancesAction
    | ISetChancesAction
    | ISetLoadingAction
    | ISetCurrentServiceAction
    | ISetServicesCountAction
    | ILoadChancesAction;

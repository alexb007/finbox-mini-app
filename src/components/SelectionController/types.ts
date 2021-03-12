import {IChancesState} from "../../store/reducers/chances/types";
import {IUser} from "../../store/types/user";
import {ISelectionFormState} from "../../store/reducers/selection/types";

export enum SortType {
  ByMaximumSum,
  ByExpirationDate
}

export interface ISelectionValues {
  sum: number | undefined;
  fullname: string | null;
  email: string | null;
  phone: string | null;
}

export default interface ISelectionControllerProps {
  id: string,
  state: IChancesState;
  loadChances: () => void;
}


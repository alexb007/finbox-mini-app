import {IChancesState} from "../../store/reducers/chances/types";

export default interface ISelectionPanelProps {
  id: string,
  state?: IChancesState;
  loadProfileInfo: () => void;
}

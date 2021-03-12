import {IChancesState} from "../../store/reducers/chances/types";
import {IPanelProps} from "../../types";

export default interface ISelectionResultProps extends IPanelProps {
    state?: IChancesState;
    reloadChances?: () => void;
    backToMain?: () => void;
}

import {IPanelProps} from "../../types";
import {IUser} from "../../store/types/user";
import {ISelectionFormState} from "../../store/reducers/selection/types";
import {ISelectionValues} from "../../components/SelectionController/types";

export default interface ISelectionFormProps extends IPanelProps {
    state: ISelectionFormState
    user: IUser;
    loadPhone: () => void;
    loadEmail: () => void;
    saveFormState: (values: ISelectionValues) => void;
    loadChances: (user: number, amount: number | undefined, email: string | null, phone: string | null) => void;
}

import IChance, {ISelectionPage} from '../../types/chance';
import IService from "../../types/service";

/**
 * The chances state interface.
 */
export type IChancesState = {
    chances: IChance[];
    page: ISelectionPage;
    loading_service: IService | null;
    progress: number;
    services_count: number;
    loading: boolean;
};

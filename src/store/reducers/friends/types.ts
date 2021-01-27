import IFriend from '../../types/friend';

/**
 * The friends state interface.
 */
export type IFriendsState = {
    list: IFriend[];
    loading: boolean;
};

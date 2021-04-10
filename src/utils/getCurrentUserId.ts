/**
 * The function return current user id.
 */
import {isSearchParamsValid} from "./crypto";

export default function getCurrentUserId(): string | null {
    const params = new URLSearchParams(window.location.search);
    if (isSearchParamsValid())
        return params.get('vk_user_id');
    return null;
}

import { action } from "../../utils/action.utils";
import { USER_FETCH_FAILED, USER_FETCH_SUCCEEDED, USER_FETCH_REQUESTED } from "./users.action.types";


export const usersActionTypes = {
    failed: (payload: any) => action(USER_FETCH_FAILED, { ...payload }),
    success: (payload: any) => action(USER_FETCH_SUCCEEDED, { ...payload }),
    request: (payload: any) => action(USER_FETCH_REQUESTED, { ...payload })
}
import { action } from "../../utils/action.utils";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./counter.action.types";


export const counterActionTypes = {
    increment: (payload: any) => action(INCREMENT_COUNTER, { ...payload }),
    decrement: (payload: any) => action(DECREMENT_COUNTER, { ...payload })
}
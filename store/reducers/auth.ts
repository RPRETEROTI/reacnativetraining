import _ from "lodash";
import { BUY, TOGGLEPREFERITES } from "../types/types";

const initialState: any = {
    acquisti: [],
    preferiti: [],
    //isFavourite: false
}
export default (state = _.cloneDeep(initialState), action: any) => {
    const newState = { ...state }
    switch (action.type) {
        case BUY: newState.acquisti.push({
            comic: action.payload.comic
        });
            return newState;

        default:
            return state
    }

}
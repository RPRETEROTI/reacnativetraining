import _ from "lodash";
import { AUTHENTICATE, LOGIN, LOGOUT, RESETSTART, SIGNUP } from "../types/types";

const initialState: any = {
    token: "",
    userId: "",
    startState: false,
    email: ""
}
export default (state = _.cloneDeep(initialState), action: any) => {
    const newState = { ...state }
    switch (action.type) {
        case AUTHENTICATE:
            newState.token += action.payload.token;
            newState.userId += action.payload.userId;
            newState.email += action.payload.email;
            return newState;
        case RESETSTART:
            newState.startState = true;
            return newState;

        // case LOGIN:
        //     newState.email += action.payload.email;
        //     return newState;
        // case SIGNUP:
        //     newState.email += action.payload.email;
        //     return newState;
        case LOGOUT:
            return initialState;

        default:
            return state
    }

}
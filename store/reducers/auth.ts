import _ from "lodash";
import { loginroutine, signuproutine } from "../sagas/authentication";
import { AUTHENTICATE, LOGOUT, RESETSTART, } from "../types/types";
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
        case signuproutine.REQUEST:
            console.log('step request')
            return newState;
        case signuproutine.SUCCESS:
            newState.token += action.payload.token;
            newState.userId += action.payload.userId;
            newState.email += action.payload.email;
            return newState;
        case loginroutine.FAILURE:
            console.log('step error')
            return newState;
        case loginroutine.REQUEST:
            console.log('step request')
            return newState;
        case loginroutine.SUCCESS:
            newState.token += action.payload.token;
            newState.userId += action.payload.userId;
            newState.email += action.payload.email;
            return newState;
        case loginroutine.FAILURE:
            console.log('step error')
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
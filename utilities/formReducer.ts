import { FORMEDITPRODUCT } from "../store/types/types";

export const formReducer = (state: any, action: any) => {
    if (action.type === FORMEDITPRODUCT) {
        const updatedValues = {
            ...state.inputs,
            [action.payload.id]: action.payload.value,
        };
        const updateValidities = {
            ...state.inputValidities,
            [action.payload.id]: action.payload.isValid,
        };
        let updateFormIsValid = true;
        for (const key in updateValidities) {
            updateFormIsValid = updateFormIsValid && updateValidities[key];
        }
        return {
            inputs: updatedValues,
            inputValidities: updateValidities,
            formIsValid: updateFormIsValid,
        };
    }
    return state;
};
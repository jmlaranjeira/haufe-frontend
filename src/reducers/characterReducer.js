import { types } from "../types/types";

const initialState = {
    data: []
}

export const characterReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.characterGetItems:
            return {
                ...state,
                data: [ ...action.payload ]
            }
        default:
            return state;
    }
}
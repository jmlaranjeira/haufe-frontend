import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';

import { authReducer } from './authReducer';
import { characterReducer } from "./characterReducer";



export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    character: characterReducer
})


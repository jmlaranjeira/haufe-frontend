import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { startLogin } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore( middlewares );
const initState = {};
let store = mockStore( initState );

describe('Test in Auth actions', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('startLogin correct', async() => {

        await store.dispatch( startLogin('admin', 'admin2020') );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                token: expect.any(String)
            }
        })

    });

});
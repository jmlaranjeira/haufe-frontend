import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";


export const getImages = () => {

    return async(dispatch) => {

        const resp = await fetchWithToken( 'characters' );
        const { data } = await resp.json();

        if( data ) {
            dispatch( characterLoaded( data ) );
        }
    }
}

const characterLoaded = (characters) => ({
    type: types.characterGetItems,
    payload: characters
})
import React from 'react'
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { ImageGrid } from "../Grid/ImageGrid";

export const RickMortyScreen = () => {

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <>
            <div>
                <h1 className="nav-title">Rick & Morty Page</h1>
                <button 
                    className="btn btn-danger nav-btn"
                    onClick={ handleLogout }
                >Salir</button>
            </div>
            
            
            <hr />

            {
                <ImageGrid />
            }
        </>
    )
}


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RickMortyScreen } from "../components/RickMorty/RickMortyScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);
    
    useEffect(() => {
        
        dispatch( startChecking() );
        
    }, [dispatch]);

    if ( checking ) { 
        return (<h5>Espere...</h5>);
    }
    
    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ RickMortyScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}

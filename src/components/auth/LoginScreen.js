import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lUsername: '',
        lPassword: ''
    });

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rUsername: '',
        rPassword1: '',
        rPassword2: ''
    });
    
    const { lUsername, lPassword } = formLoginValues;
    const { rUsername, rPassword1, rPassword2 } = formRegisterValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lUsername, lPassword ) );
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Passwords must be the same','error');
        }
        
        dispatch( startRegister( rUsername, rPassword1 ) );
    }


    return (
        <div className="container login-container">
            <div className="half-container login-form-1">
                <h3>Ingreso</h3>
                <form onSubmit={ handleLogin }>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="lUsername"
                            value={ lUsername }
                            onChange={ handleLoginInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="lPassword"
                            value={ lPassword }
                            onChange={ handleLoginInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Login" 
                        />
                    </div>
                </form>
            </div>

            <div className="half-container login-form-2">
                <h3>Registro</h3>
                <form onSubmit={ handleRegister }>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="rUsername"
                            value={ rUsername }
                            onChange={ handleRegisterInputChange }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password" 
                            name="rPassword1"
                            value={ rPassword1 }
                            onChange={ handleRegisterInputChange }
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat the password" 
                            name="rPassword2"
                            value={ rPassword2 }
                            onChange={ handleRegisterInputChange }
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit" 
                            className="btnSubmit" 
                            value="Create account" />
                    </div>
                </form>
            </div>
        </div>
    )
}
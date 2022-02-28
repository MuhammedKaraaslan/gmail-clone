import React from 'react'

import { LoginContainer } from './Login.styles';

import { auth, provider } from '../../firebase/firebase';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    })
                )
            })
            .catch((error) => alert(error.message))
    }

    return (
        <LoginContainer>
            <h1>Welcome to my gmail clone</h1>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="login logo" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </LoginContainer>
    )
}

export default Login
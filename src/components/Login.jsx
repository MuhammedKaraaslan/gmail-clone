import React from 'react'

import styled from 'styled-components';

import { auth, provider } from '../firebase/firebase';

import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

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
        <LoginPage>
            <LoginContainer>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="login logo" />
            </LoginContainer>
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </LoginPage>
    )
}

export default Login

const LoginPage = styled.div`
    background-color: #f2f2f2;
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    img{
        object-fit: contain;
        height: 50px;
    }
`;
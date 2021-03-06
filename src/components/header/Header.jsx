import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Container, HeaderLeft, HeaderMiddle, SearchIconContainer, SearchOptionIconContainer, HeaderRight } from './Header.styles';

import { logout, selectUser } from '../../features/userSlice';

import { auth } from '../../firebase/firebase';

//Source: https://mui.com/getting-started/installation/
import { Button, Avatar } from '@mui/material';
import { Menu, Apps, Settings, HelpOutline } from '@mui/icons-material';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        })
    }

    return (
        <Container>
            <HeaderLeft>
                <Button>
                    <Menu />
                </Button>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="google logo" />
            </HeaderLeft>

            <HeaderMiddle>
                <SearchIconContainer />
                <input placeholder='Search mail' type='text' />
                <SearchOptionIconContainer />
            </HeaderMiddle>

            <HeaderRight>
                <Button>
                    <HelpOutline />
                </Button>
                <Button>
                    <Settings />
                </Button>
                <Button>
                    <Apps />
                </Button>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </HeaderRight>
        </Container>
    )
}

export default Header



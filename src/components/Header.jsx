import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { logout, selectUser } from '../features/userSlice';

import { auth } from '../firebase/firebase';

//Source: https://mui.com/getting-started/installation/
import { Button, Avatar } from '@mui/material';
import { Menu, Search, ArrowDropDown, Apps, Notifications } from '@mui/icons-material';

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
                <ArrowDropDownIconContainer />
            </HeaderMiddle>

            <HeaderRight>
                <Button>
                    <Apps />
                </Button>
                <Button>
                    <Notifications />
                </Button>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </HeaderRight>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 8px;
    margin: 0 4px;

    img{
        object-fit: contain;
        height: 40px;
        width: 109px;
        margin-left: 5px;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;
const HeaderMiddle = styled.div`
    display: flex;
    flex: 0.7;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    
    input{
        border: none;
        width: 100%;
        padding: 10px;
        outline: none;
        font-size: medium;
        background-color: transparent;
    }
`;

const SearchIconContainer = styled(Search)`
    color: grey;
`;

const ArrowDropDownIconContainer = styled(ArrowDropDown)`
    color: grey;
`;

const HeaderRight = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;
`;

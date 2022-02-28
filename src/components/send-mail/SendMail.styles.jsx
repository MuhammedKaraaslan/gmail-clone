import styled from 'styled-components';

import { Close } from '@mui/icons-material'
import { Button } from '@mui/material';

export const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 40px;   
    width: 40%;
    height: 60%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

export const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    background-color: #404040;

    h3{
        color: whitesmoke;
        font-size: 13px;
    }
`;

export const CloseButton = styled(Close)`
    cursor: pointer;
`;

export const SendMailButton = styled(Button)`
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
    color: white !important;
`;


export const MailForm = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    
    input{
        height: 30px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid whitesmoke;
        outline: none;
    }
    
`;


export const InputMessage = styled.input`
    flex: 1;
`;

export const SendMailOptions = styled.div`
    background-color: white !important;
`;
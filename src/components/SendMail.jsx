import React from 'react'
import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';

import { changeSendMessageIsOpen } from '../features/mailSlice';

import { dataBase } from '../firebase/firebase';

import firebase from 'firebase/compat/app'

import styled from 'styled-components';

import { Close } from '@mui/icons-material'
import { Button } from '@mui/material';



function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        dataBase.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(changeSendMessageIsOpen())
    }

    return (
        <SendMailContainer>
            <SendMailHeader>
                <h3>New Message</h3>
                <CloseButton
                onClick={() => dispatch(changeSendMessageIsOpen())}
                />
            </SendMailHeader>

            <MailForm onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder={errors.to ? 'To is Required' : 'To'} type="email" {...register("to", { required: true })} />
                <input name='subject' placeholder={errors.subject ? 'Subject is Required' : 'Subject'} type="text" {...register("subject", { required: true })} />
                <input name='message' placeholder={errors.message ? 'Message is Required' : ''} type="text" className='sendMail__message' {...register("message", { required: true })} />
                <SendMailOptions>
                    <SendMailButton
                        variant='contained'
                        color='primary'
                        type='submit'
                    >Send</SendMailButton>
                </SendMailOptions>
            </MailForm>
        </SendMailContainer>
    )
}

export default SendMail

const SendMailContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;   
    background-color: #404040;
    width: 40%;
    height: 40%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const SendMailHeader = styled.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;

    h3{
        color: whitesmoke;
        font-size: 13px;
    }
`;

const CloseButton = styled(Close)`
    cursor: pointer;
`;

const SendMailButton = styled(Button)`
    background-color: #3079ed !important;
    text-transform: capitalize !important;
    margin: 15px !important;
`;


const MailForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;

    .sendMail__message{
        flex: 1;
    }

    input{
        height: 30px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid whitesmoke;
        outline: none;
    }
`;

// const ErrorMessage = styled.p`
//     background-color: white;
//     color: red;
//     text-align: right;
//     padding: 2px;
// `;



const SendMailOptions = styled.div``;

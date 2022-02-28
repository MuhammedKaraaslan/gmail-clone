import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { CloseButton, SendMailContainer, SendMailHeader, MailForm, SendMailOptions, SendMailButton } from './SendMail.styles';

import { changeSendMessageIsOpen } from '../../features/mailSlice';

import { dataBase } from '../../firebase/firebase';

import firebase from 'firebase/compat/app'

function SendMail() {

    const { register, handleSubmit, formState: { errors } } = useForm();

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
                <input name='to' placeholder={errors.to ? 'Recipient is Required' : 'Recipients'} type="email" {...register("to", { required: true })} />
                <input name='subject' placeholder={errors.subject ? 'Subject is Required' : 'Subject'} type="text" {...register("subject", { required: true })} />
                <input name='message' placeholder={errors.message ? 'Message is Required' : ''} type="text" className='sendMail__message' {...register("message", { required: true })} />
                <SendMailOptions>
                    <SendMailButton
                        variant='contained'
                        type='submit'
                    >Send</SendMailButton>
                </SendMailOptions>
            </MailForm>
        </SendMailContainer>
    )
}

export default SendMail
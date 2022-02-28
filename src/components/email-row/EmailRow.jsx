import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { EmailRowContainer, RowMessage, RowOptions, RowTime, RowTitle } from './EmailRow.styles';

import { selectMail } from '../../features/mailSlice'

import { StarBorderOutlined } from '@mui/icons-material';
import { Button, Checkbox } from '@mui/material';



function EmailRow({ id, title, subject, description, time }) {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }))
        navigate('/mail')
    }

    return (
        <EmailRowContainer onClick={openMail} >
            <RowOptions>
                <Button><Checkbox /></Button>
                <Button><StarBorderOutlined /></Button>
            </RowOptions>

            <RowTitle>
                {title}
            </RowTitle>

            <RowMessage>
                <h4>
                    {subject}
                    <span>{description}</span>
                </h4>
            </RowMessage>

            <RowTime>
                {time}
            </RowTime>
        </EmailRowContainer>
    )
}

export default EmailRow

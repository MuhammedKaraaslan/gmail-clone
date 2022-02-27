import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { selectMail } from '../features/mailSlice'

import styled from 'styled-components'

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

const EmailRowContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 2;

    &:hover{
        border: 1px solid whitesmoke;
        border-top: 0px;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    }
`;

const RowOptions = styled.div`
    display: flex;

`;

const RowTitle = styled.div`
    flex: 0.3;
    font-size: 13px;
`;

const RowMessage = styled.div`
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;

    h4{
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }

    span{
        font-weight: 400;
        color: gray;
    }
`;

const RowTime = styled.p`
    padding-right: 15px;
    font-size: 9px;
    font-weight: bold;
`;
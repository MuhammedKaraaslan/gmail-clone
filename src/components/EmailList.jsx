import React, { useState, useEffect } from 'react'

import EmailListSection from './EmailListSection';

import { dataBase } from '../firebase/firebase'

import styled from 'styled-components';

import { Button, Checkbox } from '@mui/material';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import EmailRow from './EmailRow';

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        dataBase.collection('emails').orderBy('timestamp', 'desc').onSnapshot(
            snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])


    return (
        <EmailListContainer>
            <EmailListSettings>
                <EmailListSettingsLeft>
                    <Button> <Checkbox /> </Button>
                    <Button> <ArrowDropDown /> </Button>
                    <Button> <Redo /> </Button>
                    <Button> <MoreVert /> </Button>
                </EmailListSettingsLeft>

                <EmailListSettingsRight>
                    <Button> <ChevronLeft /> </Button>
                    <Button> <ChevronRight /> </Button>
                    <Button> <KeyboardHide /> </Button>
                    <Button> <Settings /> </Button>
                </EmailListSettingsRight>
            </EmailListSettings>
            <EmailListSections>
                <EmailListSection Icon={Inbox} title='primary' color='red' selected={true} />
                <EmailListSection Icon={People} title='Social' color='#1A73E8' selected={false} />
                <EmailListSection Icon={LocalOffer} title='Promotions' color='green' selected={false} />
            </EmailListSections>
            <Emails>
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow
                        key={id}
                        id={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.second * 1000).toUTCString()}
                    />
                ))}
            </Emails>

        </EmailListContainer>
    )
}

export default EmailList

const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const EmailListSettings = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
`;

const EmailListSettingsLeft = styled.div``;

const EmailListSettingsRight = styled.div``;

const EmailListSections = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    z-index: 2;
`;

const Emails = styled.div`
    padding-bottom: 5%;
`;
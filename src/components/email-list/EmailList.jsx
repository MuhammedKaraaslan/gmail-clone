import React, { useState, useEffect } from 'react'

import { dataBase } from '../../firebase/firebase'

import {EmailListContainer, EmailListSettings, EmailListSettingsLeft, EmailListSettingsRight, EmailListSections, Emails} from './EmailList.styles'

import EmailListSection from '../email-list-section/EmailListSection';
import EmailRow from '../email-row/EmailRow'; 

import { Button, Checkbox } from '@mui/material';
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Refresh, Settings } from '@mui/icons-material';



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
                    <Button> <Refresh /> </Button>
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
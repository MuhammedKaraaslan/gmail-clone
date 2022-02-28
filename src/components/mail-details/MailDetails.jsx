import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { MailBody, MailBodyHeader, MailContainer, MailImportant, MailMessage, MailTime, MailTools, MailToolsLeft, MailToolsRight } from './MailDetails.styles';

import { selectOpenMail } from '../../features/mailSlice'

import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { Button } from '@mui/material';

function MailDetails() {

  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);


  return (
    <MailContainer>
      {/* MailTools Start */}
      <MailTools>
        <MailToolsLeft>
          <Button onClick={() => navigate('/')} > <ArrowBack /></Button>
          <Button><MoveToInbox /></Button>
          <Button><Error /></Button>
          <Button><Delete /></Button>
          <Button><Email /></Button>
          <Button><WatchLater /></Button>
          <Button><CheckCircle /></Button>
          <Button><LabelImportant /></Button>
          <Button><MoreVert /></Button>
        </MailToolsLeft>
        <MailToolsRight>
          <Button> <UnfoldMore /></Button>
          <Button><Print /></Button>
          <Button><ExitToApp /></Button>
        </MailToolsRight>
      </MailTools>
      {/* MailTools End */}

      {/* MailBody Start */}
      <MailBody>
        <MailBodyHeader>
          <h2>{selectedMail?.subject}</h2>
          <MailImportant />
          <p>{selectedMail?.title}</p>
          <MailTime>{selectedMail?.time}</MailTime>
        </MailBodyHeader>
        <MailMessage>{selectedMail?.description}</MailMessage>
      </MailBody>
      {/* MailBody End */}


    </MailContainer >
  )
}

export default MailDetails
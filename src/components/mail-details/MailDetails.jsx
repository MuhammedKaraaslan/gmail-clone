import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { MailBody, MailBodyHeader, MailContainer, MailImportant, MailMessage, MailTime, MailTools, MailToolsLeft, MailToolsRight } from './MailDetails.styles';

import { selectOpenMail } from '../../features/mailSlice'

import { AddTask, Archive, ArrowBack, Delete, DriveFileMove, Label, MarkAsUnread, OpenInNew, Print, Report, WatchLater } from '@mui/icons-material';
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
          <Button><Archive /></Button>
          <Button><Report /></Button>
          <Button><Delete /></Button>
          <Button><MarkAsUnread /></Button>
          <Button><WatchLater /></Button>
          <Button><AddTask /></Button>
          <Button><DriveFileMove /></Button>
          <Button><Label /></Button>
        </MailToolsLeft>
        <MailToolsRight>
          <Button><Print /></Button>
          <Button><OpenInNew /></Button>
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
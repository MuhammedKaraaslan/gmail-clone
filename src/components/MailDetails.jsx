import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { selectOpenMail } from '../features/mailSlice'

import styled from 'styled-components';

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

const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;

`;

const MailToolsLeft = styled.div``;

const MailToolsRight = styled.div``;

const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding: 20px;
  position: relative;

  h2{
    font-weight: 400;
    margin-right: 20px;
  }

  p{
    margin-left: 20px;
  }
`;

const MailImportant = styled(LabelImportant)`
  color: #e8ab02;
`;

const MailTime = styled.div` 
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 12px;
  color: gray;
`;

const MailMessage = styled.div`
  p{
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;
  }

`;

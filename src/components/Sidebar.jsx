import React from 'react'

import { useDispatch } from 'react-redux';

import {changeSendMessageIsOpen} from '../features/mailSlice'

import SidebarOption from './SidebarOption';

import styled from 'styled-components';

import { Button } from '@mui/material'
import { AccessTime, ExpandMore, Inbox, LabelImportant, NearMe, Note, Star, Add, Person, Duo, Phone } from '@mui/icons-material';

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <ComposeButton
        onClick={() => dispatch(changeSendMessageIsOpen())}
        startIcon={<Add fontSize='large' />}
      >Compose</ComposeButton>

      <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={false} />
      <SidebarOption Icon={Star} title='Starred' number={54} selected={false} />
      <SidebarOption Icon={AccessTime} title='Snoozed' number={7} selected={false} />
      <SidebarOption Icon={LabelImportant} title='Important' number={7} selected={false} />
      <SidebarOption Icon={NearMe} title='Sent' number={7} selected={false} />
      <SidebarOption Icon={Note} title='Drafts' number={7} selected={false} />
      <SidebarOption Icon={ExpandMore} title='More' number={7} selected={false} />

      <SidebarFooterContainer>
        <SidebarFooterIcons>
          <Button> <Person /> </Button>
          <Button> <Duo /> </Button>
          <Button> <Phone /> </Button>
        </SidebarFooterIcons>
      </SidebarFooterContainer>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

const ComposeButton = styled(Button)`
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: #3c4043 !important;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

const SidebarFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SidebarFooterIcons = styled.div``;
import React from 'react'

import { useDispatch } from 'react-redux';

import { changeSendMessageIsOpen } from '../../features/mailSlice'

import SidebarOption from '../side-bar-option/SidebarOption';

import { ComposeButton, SidebarContainer, SidebarFooterContainer, SidebarFooterIcons } from './Sidebar.styles';

import { Button } from '@mui/material'

import { AccessTime, ExpandMore, Inbox, LabelImportant, NearMe, Note, Star, Add, Person, Duo, Phone } from '@mui/icons-material';

function Sidebar() {

  const dispatch = useDispatch();

  return (
    <SidebarContainer>
      <ComposeButton
        onClick={() => dispatch(changeSendMessageIsOpen())}
        startIcon={<Add />}
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


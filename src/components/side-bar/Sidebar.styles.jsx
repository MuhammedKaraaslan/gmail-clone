import styled from 'styled-components';

import { Button } from '@mui/material'

export const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;
`;

export const ComposeButton = styled(Button)`
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: #3c4043 !important;
  padding: 15px !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

export const SidebarFooterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarFooterIcons = styled.div``;
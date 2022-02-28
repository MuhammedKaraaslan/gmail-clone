import styled from 'styled-components';

import { Button } from '@mui/material'

export const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 256px;
`;

export const ComposeButton = styled(Button)`
  height: 48px;
  min-width: 80px;
  padding: 0 24px 0 24px !important;
  margin-top: 15px !important;
  margin-left: 10px !important;
  margin-bottom: 15px !important;
  text-transform: capitalize !important;
  color: #3c4043 !important;
  border-radius: 30px !important;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
`;

export const SidebarFooterContainer = styled.div`
  display: flex;
`;
export const SidebarFooterIcons = styled.div``;
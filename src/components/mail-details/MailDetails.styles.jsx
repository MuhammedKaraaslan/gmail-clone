import styled from 'styled-components';

import { LabelImportant } from '@mui/icons-material';


export const MailContainer = styled.div`
  flex: 1;
`;

export const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  padding: 5px 0;
`;

export const MailToolsLeft = styled.div``;

export const MailToolsRight = styled.div``;

export const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 45px;
  height: 100vh;
`;

export const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 20px;
  position: relative;

  h2{
    font-weight: 400;
    margin-right: 20px;
  }

  p{
    margin-left: 20px;
  }
`;

export const MailImportant = styled(LabelImportant)`
  color: #e8ab02;
`;

export const MailTime = styled.div` 
  position: absolute;
  top: 24px;
  right: 0;
  font-size: 12px;
  color: gray;
`;

export const MailMessage = styled.div`
  p{
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word;
  }

`;
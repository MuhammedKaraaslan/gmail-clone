import styled from 'styled-components';

import { LabelImportant } from '@mui/icons-material';


export const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;

export const MailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;

`;

export const MailToolsLeft = styled.div``;

export const MailToolsRight = styled.div``;

export const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  background-color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;

export const MailBodyHeader = styled.div`
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
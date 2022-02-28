import styled from 'styled-components';

export const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const EmailListSettings = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
`;

export const EmailListSettingsLeft = styled.div``;

export const EmailListSettingsRight = styled.div``;

export const EmailListSections = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    z-index: 2;
`;

export const Emails = styled.div`
    padding-bottom: 5%;
`;
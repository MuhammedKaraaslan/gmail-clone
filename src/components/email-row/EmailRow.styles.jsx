import styled from 'styled-components'

export const EmailRowContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 2;

    &:hover{
        border: 1px solid whitesmoke;
        border-top: 0px;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    }
`;

export const RowOptions = styled.div`
    display: flex;

`;

export const RowTitle = styled.div`
    flex: 0.3;
    font-size: 13px;
`;

export const RowMessage = styled.div`
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;

    h4{
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }

    span{
        font-weight: 400;
        color: gray;
    }
`;

export const RowTime = styled.p`
    padding-right: 15px;
    font-size: 9px;
    font-weight: bold;
`;
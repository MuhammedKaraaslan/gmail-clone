import styled, { css } from 'styled-components';

const getSelection = css`
    &, p, h3{
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
        display: flex;
    }
`;

const isSelected = (props) => {
    if(props.containerSelection){
        return getSelection
    }
    return null
} 

export const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #818181;

    &:hover,
    &:hover h3,
    &:hover p
    {
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
    }

    h3{
        flex: 1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    p{
        display: none;
        font-weight: 300;
    }

    &:hover p{
        display:flex;
    }

    ${isSelected}
`;
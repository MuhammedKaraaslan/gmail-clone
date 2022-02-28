import styled from 'styled-components';

import { Search, ArrowDropDown } from '@mui/icons-material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 8px;
    margin: 0 4px;

    img{
        object-fit: contain;
        height: 40px;
        width: 109px;
        margin-left: 5px;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;
export const HeaderMiddle = styled.div`
    display: flex;
    flex: 0.7;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    
    input{
        border: none;
        width: 100%;
        padding: 10px;
        outline: none;
        font-size: medium;
        background-color: transparent;
    }
`;

export const SearchIconContainer = styled(Search)`
    color: grey;
`;

export const ArrowDropDownIconContainer = styled(ArrowDropDown)`
    color: grey;
`;

export const HeaderRight = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;
`;
import styled from 'styled-components';

import { Search, Tune } from '@mui/icons-material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    padding: 8px;

    Button{
        padding: 12px;
        margin: 0 4px;
    }

    img{
        object-fit: contain;
        height: 40px;
        width: 109px;
        margin-bottom: 4px;
    }
`;

export const HeaderLeft = styled.div`
    min-width: 208px;
    padding-right: 30px;
    display: flex;
    align-items: center;
`;
export const HeaderMiddle = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    padding-left: 10px;
    pading-right: 30px; 
    flex: .5;
    align-items: center;
    background-color: whitesmoke;
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

export const SearchOptionIconContainer = styled(Tune)`
    color: grey;
    padding-right: 10px;
`;

export const HeaderRight = styled.div`
    display: flex;
    padding-right: 20px;
    align-items: center;
`;
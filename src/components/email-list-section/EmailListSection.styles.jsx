import styled, { css } from 'styled-components';

const getSelection = css`
color: ${props => props.color}; 
border-bottom: 3px solid ${props => props.color};
background-color: whitesmoke;
border-width: 3px !important;
`;

const isSelected = (props) => {
if (props.listSelection) {
    return getSelection
}
return null
}

export const SectionContainer = styled.div`
display: flex;
align-items: center;
border-bottom-width: 2px;
padding: 0 15px;
min-width: 200px;
cursor: pointer;
color: grey;

&:hover {
    background-color: whitesmoke;
}

h4{
    font-size: 14px;
    margin-left: 15px;
    text-transform: capitalize;
}

${isSelected}
`;
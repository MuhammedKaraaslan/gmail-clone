import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    height: 100vh;

    h1{
        color: #1976d2;
        text-transform: capitalize;
        margin-bottom: 30px;
    }

    img{
        object-fit: contain;
        height: 50px;
    }

    Button {
        color: white !important;
        width: 20%;
        margin-top: 30px;
    }
`;
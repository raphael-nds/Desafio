import styled from 'styled-components';

export const Main = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #ccc;

`;

export const Logo = styled.div`
    width: auto;
    height: auto;
    justify-content: flex-start;
    margin: auto 50px;

    h2{
        color: white;
        font-size: 40px;
        padding: 5px;

        @media screen and (max-width: 768px){
            font-size: 30px;
        }
    }

    @media screen and (max-width: 768px){
            margin: auto 1px auto auto
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
            margin: auto;
    }
`;

    




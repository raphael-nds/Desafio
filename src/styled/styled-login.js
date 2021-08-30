import styled from 'styled-components';
import {Link as cadLink} from 'react-router-dom';


export const ContainerForms = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #1A1A1D;
    text-align: center;
    

    h1{
        padding: 20px;
        color: white;
        margin: auto;


        @media screen and (max-width: 768px){
         width: 90%
        }
        @media screen and (min-width: 768px) and (max-width: 1024px){
           padding: 20px;
           font-size: 25px;
        }
    }

    @media screen and (max-width: 768px){
        width: 90%;
        margin: auto;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 60%;
        margin: auto;
    }

`;

export const Forms = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 75%;
    margin: auto;
    color: white;
    justify-content: flex-end;
    //background-color: tomato;

    .btn-google{
        width: 50%;
        height: 50px;
        margin: auto;
        background-color: white;

        svg{
            margin-right: 15px;
            font-size: 25px;
        }

        &:active{
            background-color: rgb(232,162,32);
            transition: all ease 0.2s;
        }

        @media screen and (max-width: 768px){
        width: auto;
        margin: auto;
        padding: 5px;

        }
        @media screen and (min-width: 768px) and (max-width: 1024px){
            width: auto;
            margin: auto;
            padding: 5px;
        }

    }

    .campo{
        display: flex;
        width: 90%;
        height: 40px;
        margin: 10px auto;
        padding: 10px;
        border-radius: 10px;
        background-color: #252328;

        svg{
            margin-left: 10px;
            font-size: 25px;
        }

        input{
            background: transparent;
            width: 100%;
            margin: 0px 10px;
            outline-width: 0;
            color: white;
            border: none;
            font-size: 17px;
        }

        @media screen and (max-width: 768px){
            width: 90%
        }
        @media screen and (min-width: 768px) and (max-width: 1024px){
            width: 100%
        }
    }


    @media screen and (max-width: 768px){
        width: 90%
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 85%;
    }
`;

export const Button = styled.button`
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    height: 40px;
    margin: 10px 25px 10px auto ;
    border-radius: 10px;
    font-size: 17px;
    border: none;
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 188, 52);
    cursor: pointer;

    &:active{
        background-color: rgb(38, 101, 31);
        transition: all ease 0.2s;
    }

`;

export const LinkRout = styled(cadLink)`
    display: flex;
    flex-wrap: wrap;
    width: auto;
    margin-left: 5px;
    justify-content: flex-end;
    color: white;
    text-decoration: underline;
`;

export const Text = styled.p`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 1px auto;
    justify-content: flex-end;

    @media screen and (max-width: 768px){
        width: 90%
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 90%
    }
`;
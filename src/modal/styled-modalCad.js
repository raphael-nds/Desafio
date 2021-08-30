import styled from 'styled-components'

export const Modal = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;

    .container{
        width: 40%;
        height: auto;
        color: #0000;
        background-color:#1A1A1D;
        border-radius: 5px;
    }

    .fechar{
        display: flex;
        background-color: transparent;
        position: relative;
        border: none;
        outline:none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        right: calc(-100% + 60px);
        top: 16px;
        cursor: pointer;
        border-radius: 20px;
        align-items: center;

        &:before,
        &:after{
            content: ' ';
            position: absolute;
            width: 2.5px;
            height: 24px;
            background-color: #fff;
        }

        &:before{
            transform: rotate(45deg);

        }
        &:after{
            transform: rotate(-45deg);
        }
    }

`;
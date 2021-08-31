import styled from 'styled-components'

export const Modal = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: none;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);

    .containerLista{
        width: 75%;
        height: 90%;
        color: white;
        background-color:#1A1A1D;
        border-radius: 5px;
        overflow-x: none;
        overflow-y: scroll;
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
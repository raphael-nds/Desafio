import styled from 'styled-components'


export  const ContainerCard = styled.div`
    width: 90%;
    margin: auto;
    

    .cepAdicionado{
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-size: 30px;
        }
    }

    .modalAddEnd{
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);

        .formulario{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color:white;
            padding: 20px;
            width: 80%;
            max-width: 300px;
        }

        .fecharModal{
            position: absolute;
            top: -10;
            right: -10;
            cursor: pointer;
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: blue;

        }

    }
`;



    

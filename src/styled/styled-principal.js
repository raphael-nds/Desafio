import styled from 'styled-components'

export const ContainerWrapper = styled.section`
   width: 100%;
   height: 100%;
   background-color: #1A1A1D;
   max-width: 400px;
   overflow-y: scroll;
   `;

export const ContainerUsuario = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: black;
    width: 90%;
    height: 60px;
    margin: 29px auto auto auto;
    background-color: #1A1A1D;
    color: white;
    border-radius: 5px;
    justify-content: space-around;
    align-items: center;
 
        .menuUser{
            display: flex;
            width: 100%;
            margin: auto;
            justify-content: flex-start;
            align-items: center;


            .usuarioImg{
                width: 60px;
                height: 60px;
            }

            .dadosImg{
                .iconsUser{
                    margin: auto;
                    font-size: 50px;    
                }
            }

            .dadosTxt{
                margin: auto 20px;

                p{
                    font-size: 12px;
                }
            }
            
        }


       
`;

export const ContainerSA = styled.div`
    width: 90%;
    margin: 10px auto;

    .menuIcons{
        display: flex;
        width: 100%;
        height: 50px;
        margin: 15px auto;
        background-color: #1A1A1D;
        color: white;
        border-radius: 5px;
        justify-content: space-between;

        svg{
            width: 45px;
            height: 45px;
            padding: 10px;
            margin: auto 10px;
            border-radius: 30px;
            cursor: pointer;

            &:hover{
                background-color: rgba(220,220,220,0.66);
            }
        }
    }

    .menuConfig{
        display: flex;
        width: 100%;
        height: 50px;
        margin: 15px auto;
        background-color: white;
        border-radius: 5px;
       
        .buscarCep{
            display: flex;
            width: 75%;
            height: 50px;
            background-color: white;
            border-radius: 5px;

            svg{
                width: 45px;
                height: 45px;
                padding: 10px;
                margin: auto 10px;
                color: black;                
                border-radius: 30px;
                cursor: pointer;

                &:hover{
                    background-color: rgba(0,0,0,0.04);
                }
            }

            input{
                background: transparent;
                width: 87%;
                outline-width: 0;
                color: black;
                margin-left: 20px;
                border: none;
                font-size: 17px;
            }

        }

        .iconsConfig{
            display: flex;
            width: 25%;
            height: 50px;
            background-color: white;
            border-left: 2px solid black;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;

            svg{
                width: 45px;
                height: 45px;
                padding: 10px;
                margin: auto;
                color: black;                
                border-radius: 30px;
                cursor: pointer;

                &:hover{
                    background-color: rgba(0,0,0,0.04);
                }
            }
        }
        
    }

`;


export const ContainerAddLoc = styled.div`
    width: 100%;
    height: 100%;
    background-color:#1A1A1D;
`;

export const ContainerListaEnd = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;

export const MsgCard = styled.h2`
    color: white;    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MsgEmpty = styled.h5`
    color: white;    
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

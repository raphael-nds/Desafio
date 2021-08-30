import styled from 'styled-components';


export const ContainerCadastro = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 90%;
        margin: auto
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        width: 60%;
        margin: auto;
    }
`;

export const FormsCadastro = styled.form`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    color: white;

    label{
        font-size: 20px;
        text-align: left;
        margin-left: 5%;
        padding: 10px;
    }

    .form-l{
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .opUf{
            display: flex;
            margin-left: 10px;
        }



        .campo{
            width: 45%;
            margin: 10px auto;

            @media screen and (max-width: 768px){
                width: 45%;
            }
            
        }

        .txt-log{
            display: flex;
            width: 70%;
            height: 40px;
            margin: 10px auto;
            padding: 5px;
            border-radius: 10px;
            background-color: #252328;
            input{ 
                background: transparent;
                width: 100%;
                margin: 0px 10px;
                outline-width: 0;
                color: white;
                border: none;
                font-size: 17px;
            }
        }
        .txt-num{
            display: flex;
            width: 20%;
            height: 40px;
            margin: 10px auto;
            padding: 5px;
            border-radius: 10px;
            background-color: #252328;

            input{ 
                background: transparent;
                width: 100%;
                margin: 0px 10px;
                outline-width: 0;
                color: white;
                border: none;
                font-size: 17px;
            }
        }

        select{
            width: 45%;
            height: 40px;
            margin: 10px auto;
            padding: 5px;
            border-radius: 10px;
            outline-width: 0;
            background-color: #252328;
            color:white;
        }
       
    }

    .campo{
        display: flex;
        width: 95%;
        height: 40px;
        margin: 10px auto;
        padding: 5px;
        border-radius: 10px;
        background-color: #252328;

        input{
            background: transparent;
            width: 100%;
            margin: 0px 10px;
            outline-width: 0;
            color: white;
            border: none;
            font-size: 17px;
        }

        
    }

    .btn-cad{
        width: 45%;
        margin: 25px 12px 10px auto;
    }

    .btn-can{
        width: 45%;
        margin: 25px 12px 10px auto;
        background-color: #ccc;

        .linkCad{
            color: black;
            text-decoration: none;
        }
    }


    

`;
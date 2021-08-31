import {React, useState, useEffect} from 'react'
import {ContainerSA, ContainerUsuario, ContainerWrapper, ContainerAddLoc, MsgCard, MsgEmpty, ContainerListaEnd} from '../styled/styled-principal';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import ModalCadEnd from '../modal/enderecoCad';
import {useHistory} from 'react-router-dom';
import { DeleteData, recuperarEndLocFirebase } from '../firebaseDados';
import { Grid, Typography } from '@material-ui/core';
import DadosFirebase from './dadosFirebase';
import CadastroNovoEnd from './cadastroNovoEnd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { auth } from '../firebase';
import { useAuth } from '../hook/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalListaEnd from '../modal/listaEnd';
import ListaEnd from './listaEnd';



const Principal = () => {

    const [modalVisivel, setModalVisivel] = useState(false);

    const [modalVisivelLista, setModalVisivelLista] = useState(false);

    const [registeresAddress, setRegisteresAddress] = useState([]);

    const [loading, setLoading] = useState(true);

    const { user, setUser } = useAuth()

    let [Fetched, setFetched] = useState(false);

    const history = useHistory();

    const warn = () => {
            toast.warn ('Logout efetuado com sucesso', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const notify = () => {
        toast.success('Carregando endereços !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    };

    // deletar dados no firebase
    const onDeleteAddress = async(index) => {
        
        if(window.confirm("Você tem certeza que deseja deletar ?")){
           await DeleteData(index);
           
           const arrayAux = [...registeresAddress]

           const filter = arrayAux.filter(item => item.id !== index)
   
           setRegisteresAddress(filter)
           } 
                        
        }
    

        //recuperar dados cadastrados no firebase
    const handleData = async() => {
        const dados = await recuperarEndLocFirebase()

        setRegisteresAddress(dados)
        setFetched(true);
        setLoading(false)

    }

     // verificar dados ao iniciar
     useEffect(() => {
        handleData()
        loading && notify()
     }, [])

     // acessar enderecos
     const onAddAddress = () => {
         handleData()
         
     }
    

     // deslogar conta
     function logout(e) {
        e.preventDefault();
        auth.signOut()
            .then(function(val){
                warn()
                setUser(null);
                window.location.href = "/";
            })
     }


    return (
        <ContainerWrapper>
            <ToastContainer/>
        
            <ContainerUsuario>
               <div className="menuUser">
                    <div className="dadosImg">
                        <AccountCircle className="iconsUser"/>
                    </div>
                    
                    <div className="dadosTxt"> 
                        <h2>Olá, <span> nome_usuario</span></h2>
                        <p>
                            Endereço_do_usuário
                        </p>
                    </div>
                </div>
            </ContainerUsuario>
            
            
            <ContainerSA>
                <div className="menuIcons">
                    <div>
                        <FormatListBulletedIcon onClick={() => setModalVisivelLista(true)}/>
                        {
                            (modalVisivelLista) &&

                            (<ModalListaEnd onClose={() => setModalVisivelLista(false)}>
                            
                                <ContainerListaEnd>
                                    <ListaEnd  registeresAddress={registeresAddress}/>
                                </ContainerListaEnd>
                            </ModalListaEnd>)
                        
                        }
                        <AddLocationIcon onClick={() => setModalVisivel(true)}/>
                        {
                            (modalVisivel) &&

                            (<ModalCadEnd onClose={() => setModalVisivel(false)}>
                            
                                <ContainerAddLoc>
                                    <CadastroNovoEnd onAddAddress={() => onAddAddress()}
                                                    onClose={() => setModalVisivel(false)}/>
                                </ContainerAddLoc>
                            </ModalCadEnd>)
                        
                        }
                    </div>

                    <div>
                        <ExitToAppIcon onClick={(e) => logout(e)}/>
                    </div>
          
                </div>
            
                <Typography paragraph variante="h5" align="left">
                    
                    <MsgCard>
                     Endereços cadastrados
                    </MsgCard>
                    
                    <Grid container >
                        <Grid item xs >
                            <Grid item xs >
                                {
                                    (!loading && registeresAddress.length > 0)  && (
                                        registeresAddress.map((address, index) => (
                                             <DadosFirebase key={index} dadosCard={address} onDelete={(index) => 
                                                {onDeleteAddress(address.id)}}/>
                                            
                                        ))
                                    )
                                }
                                {
                                    (!loading && registeresAddress.length === 0 && (
                                        <MsgEmpty>
                                            Não existe endereços cadastrados
                                        </MsgEmpty>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>

            
            </ContainerSA>

        </ContainerWrapper>
    )
}

export default Principal;

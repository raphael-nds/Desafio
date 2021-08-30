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
import db, { auth } from '../firebase';
import { useAuth } from '../hook/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalListaEnd from '../modal/listaEnd';
import listaEnd from './listaEnd';
import ListaEnd from './listaEnd';
import fireDb from '../firebase'



const Principal = () => {

    const [modalVisivel, setModalVisivel] = useState(false);

    const [modalVisivelLista, setModalVisivelLista] = useState(false);

    const [registeresAddress, setRegisteresAddress] = useState([]);

    const [loading, setLoading] = useState(true);

    let [dadosEnde, setDadosEnde] = useState({})

    const { user, setUser } = useAuth()

    let [atualizarEnd, setAtualizarEnd] = useState([]);

    let [Fetched, setFetched] = useState(false);

    const history = useHistory();

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

    /*const dadosViaCep = (res) => {
        for(const campo in res){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = res[campo];
            } 
        }
    }*/
  
    /*function onbluerCep(e) {
        const cep = e.target.value?.replace(/[^0-9]/g, '');
        const op = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }
  
        if (cep?.length !== 8){
            return;
        }
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`, op)
        .then(res => {res.json()
            .then(data => dadosViaCep(data))
        })
        .catch(e => console.log("Deu erro" ))
    }

     let [values, setValues] = useState(localizacaoItem);

 //capturar valor do input
    const handleInputChange = (e) => {
        let { name, value} = e.target;
        console.log("name", name, "value", value);

        setValues({
            ...values,
            [name]: value,
        });
    };


     const cadastrarLoc = (e) => {
       e.preventDefault();      
      addEndLocFirebase(values);
      alert("Endereço cadastrado com sucesso!");
      console.log("dados: -", values);

        //resetar campos
      setValues({
        logradouro: '',
        numero: '',
        cep: '',
        localidade: '',
        bairro: '',
        uf: ''
      });

*/
    //campos iniciais dos dados
    /*const localizacaoItem = {
        logradouro: '',
        numero: '',
        cep: '',
        localidade: '',
        bairro: '',
        uf: ''
    };*/
 
 
    
      /*
      addEdit(values) 
      let logradouro = document.getElementById("logradouro").value;
       alert(logradouro);
       let numero = document.getElementById("numero").value;
       let cep = document.getElementById("cep").value;
       let localidade = document.getElementById("localidade").value;
       let bairro = document.getElementById("bairro").value;
       let uf = document.getElementById("uf").value;

 */

    const onDeleteAddress = async() => {
       /* const arrayAux = [...registeresAddress]
        arrayAux.splice(id)
        const filter = arrayAux.filter(item => item.id !== id)

        setRegisteresAddress(arrayAux)*/
        
        if(window.confirm("Você tem certeza que deseja deletar ?")){
            const delll = await DeleteData();
            console.log("del", delll)
           }
           
                        
        }
    


    const handleData = async() => {
        const dados = await recuperarEndLocFirebase()

        console.log('dados', dados)

        setRegisteresAddress(dados)
        setFetched(true);
        setLoading(false)
    }

     
     useEffect(() => {
        handleData()
        loading && notify()
     }, [])

     console.log('enderecos', registeresAddress)

     /*const addEdit = obj => {
        fireDb.child('enderecos').push( obj, (err) =>{
            if(err){
                console.log(err);
            }
        });
        history.push("/Inicio");
     };
 */

    

     function logout(e) {
        e.preventDefault();
        auth.signOut()
            .then(function(val){
                alert("deslogado")
                setUser(null);
                window.location.href = "/";
            })
     }

 /*
  useEffect(() => {
   fireDb.child("endereco").on("value", (dbPhoto) => {
     if(dbPhoto.val() != null){
       setDadosEnde({
         ...dbPhoto.val(),
         
       });
     } else {
     }
   });
  }, []);
 */


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
                                    <ListaEnd/>
                                </ContainerListaEnd>
                            </ModalListaEnd>)
                        
                        }
                        <AddLocationIcon onClick={() => setModalVisivel(true)}/>
                        {
                            (modalVisivel) &&

                            (<ModalCadEnd onClose={() => setModalVisivel(false)}>
                            
                                <ContainerAddLoc>
                                    <CadastroNovoEnd/>
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
                                             <DadosFirebase key={index} dadosCard={address} onDelete={(index) => onDeleteAddress(index)}/>
                                            // <div>{address.uf}</div>
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


            {/* <RecipeReviewCard/> */}

        </ContainerWrapper>
    )
}

export default Principal;

//modal cadastrar
/* <div className="menuConfig">
                    <div className="buscarCep">
                        <input 
                            id="buscarCepId"
                            type="text" 
                            placeholder="Buscar CEP"
                        />
                        <SearchIcon/>   
                    </div>

                    <div className="iconsConfig">
                     <AddLocationIcon style={{color: "black"}}  onClick={() => setModalVisivel(true)}/>
                    {
                        (modalVisivel) &&

                        (<ModalCadEnd onClose={() => setModalVisivel(false)}>
                        
                            <ContainerAddLoc>
                                <CadastroNovoEnd/>
                            </ContainerAddLoc>
                        </ModalCadEnd>)
                    
                    }
                    </div>
                </div>
                */
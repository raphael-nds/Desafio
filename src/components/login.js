import {React, useState, useEffect} from 'react';
import { Button, ContainerForms, Forms, LinkRout, Text } from '../styled/styled-login';
import {MdEmail} from 'react-icons/md';
import {FcGoogle} from 'react-icons/fc';
import {RiLockPasswordFill} from 'react-icons/ri';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { auth, provider } from '../firebase';
import { useAuth } from '../hook/auth';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const [show, setShow] = useState(null);

    const history = useHistory()

    const [password, setPassword] = useState("");
   
    const [login, setLogin] = useState(null);

    const { user, setUser } = useAuth()

    const notify = () => {
        toast.success('Login realizado com sucesso', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    };


    //ativar-desativar olhos no campo senha
    const handleClick = (e) =>{
        e.preventDefault();
        setShow(!show);
    }

    //fazer login com email e senha
    function loginEmailSenha(e){
        e.preventDefault();
        let emailLogin = document.getElementById("emailLog").value;
        let senhaLogin = document.getElementById("senhaLog").value;

        auth.signInWithEmailAndPassword(emailLogin, senhaLogin)
        .then((auth) => {
            notify()
            setUser(true)

            history.push('/Inicio')
        })
    }

    //login persistente
    useEffect(() => {
        auth.onAuthStateChanged((val) => {
            setLogin(val.email);
            
        });
    }, [])

    // login conta google
    function handleLogin(e){
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(function(result){
            if(result){
                setLogin(result.user.email);
                setUser(true)
                notify()
                history.push('/Inicio')
            }
        })
    }

    return(
        <ContainerForms>

            <h1>Faça login ou cadastre-se para começar</h1>

            <Forms>

                <Button 
                    className="btn-google"
                    onClick={(e) => handleLogin(e)}>
                        <FcGoogle/>
                    Login com Google
                </Button>

                <h3>Ou</h3>

                <div className="campo">
                    <MdEmail/>
                    <input 
                        id="emailLog"
                        type="email" 
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div className="campo">
                    <RiLockPasswordFill/>
                    <input 
                        id="senhaLog"
                        type={ show? "password" : "text" }
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    <div className="eye">
                        {
                            show? (
                                <AiFillEye
                                size={20}
                                onClick={handleClick}/>
                            ) : (
                                <AiFillEyeInvisible
                                size={20}
                                onClick={handleClick}/>
                            )
                        }

                    </div>
                </div>

                
                <Text>
                    <LinkRout to="#">Esqueceu a senha ?</LinkRout>
                </Text>

               

                <Button onClick={(e) => loginEmailSenha(e)}>
                    Login
                </Button>

                <Text>Não possui uma conta ? 
                    
                    <LinkRout to="/Cadastro">Cadastre-se aqui</LinkRout>
                </Text>
            

            </Forms>
        </ContainerForms>
    );
}

export default Login;
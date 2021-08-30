import React from 'react';
import { FormsCadastro } from '../styled/styled-cadastro';
import { ContainerCadastro } from '../styled/styled-cadastro';
import { Button, LinkRout } from '../styled/styled-login';
import {auth} from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hook/auth';


const  Cadastro = () => {

    const { user, setUser } = useAuth()

    const history = useHistory()

    const notify = () => {
        toast.success('Conta criada com sucesso', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        toast.error('Senha não confere', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };

    const dadosViaCep = (res) => {
        for(const campo in res){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = res[campo];
            }
            
        }
    }

   

    function criarConta(elem){
        elem.preventDefault();
        
        let nomeUsuario = document.getElementById("nomeCad").value;
        let emailUsuario = document.getElementById("emailCad").value;
        let senha1 = document.getElementById("senhaCad1").value;
        let senha2 = document.getElementById("senhaCad2").value;

        //criar conta
        if(senha1 === senha2){
            auth.createUserWithEmailAndPassword(emailUsuario, senha1)
            .then((authUser) =>{
                authUser.user.updateProfile({
                    displayName: nomeUsuario
                })
                setUser(true)

            history.push('/Inicio')
                notify(toast.sucess)
                
            })
            .catch((error)=>{
               notify(toast.error)
            })
        }else{
            
        }
        
        

        
    }

    function onbluerCep(e) {
       
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

    return(
        <ContainerCadastro>
            <ToastContainer/>

            <FormsCadastro onSubmit={(elem) => criarConta(elem)}>

           
                <label>
                    Informações pessoais:
                </label>
               
                <div className="form-l">
                    <div className="campo">
                        <input id="nomeCad" type="text" placeholder="Seu nome"/>
                    </div>
                    <div className="campo">
                        <input id="emailCad" type="email" placeholder="Seu e-mail"/>
                    </div> 
                </div>
                    
                   
                <div className="form-l">
                    <div className="campo">
                        <input id="senhaCad1" type="password" placeholder="Digite uma senha"/>
                    </div>

                    <div className="campo">
                        <input id="senhaCad2" type="password" placeholder="Digite a senha novamente"/>
                    </div>
                </div>

                <label>
                    Informações endereço:
                </label>

                <div className="campo">
                        <input type="text" placeholder="CEP (xxxxx-xxx)" id="cep" onBlur={onbluerCep} />
                    </div>
                <div className="form-l">
                    <div className="txt-log">
                        <input type="text"  placeholder="Logradouro" id="logradouro"/>
                    </div>
                    <div className="txt-num">
                        <input type="text"  placeholder="Número" id="numero"/>
                    </div>
                </div>

                <div className="form-l">
                    
                    <div className="campo">
                        <input type="text" placeholder="Cidade" id="localidade" />
                    </div>
                    <div className="campo">
                        <input type="text" placeholder="Bairro" id="bairro" />
                    </div>
                    
    
                    <select name="Estado" id="uf"  className="opUf">
                        <option value={null}>Selecione um Estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraiba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RR">Roraima</option>
                        <option value="RO">Rondônia</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>


                <div className="form-l">
                    <Button className="btn-can">
                        <LinkRout to="/" className="linkCad">Voltar</LinkRout>
                    </Button>

                    <Button className="btn-cad">
                        Cadastrar
                    </Button>
                </div>
            </FormsCadastro>

        </ContainerCadastro>
    
    );
}


export default Cadastro;



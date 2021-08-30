import { React, useState } from 'react'
import { addEndLocFirebase } from '../firebaseDados';
import { FormsCadastro } from '../styled/styled-cadastro';
import { Button } from '../styled/styled-login';

const CadastroNovoEnd = () => {

    const localizacaoItem = {
        logradouro: '',
        numero: '',
        cep: '',
        localidade: '',
        bairro: '',
        uf: ''
    };
    
    let [values, setValues] = useState(localizacaoItem);

    const dadosViaCep = (res) => {
        for(const campo in res){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = res[campo];
            } 
        }
    }

    //autopreencher campos pelo cep
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

    //capturar valor do input
    const handleInputChange = (e) => {
        let { name, value} = e.target;
        console.log("name", name, "value", value);

        setValues({
            ...values,
            [name]: value,
        });
    };

    // cadastrar nova localização no firebase
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
    }

    return(
        <FormsCadastro autoComplete="Off" onSubmit={cadastrarLoc}>
                                    <div className="formularioAddLoc">
                                        <label>
                                            Informações endereço:
                                        </label>

                                        <div className="form-l">
                                            <div className="txt-log">
                                                <input 
                                                    type="text" 
                                                    name="logradouro" 
                                                    value={values.logradouro}
                                                    placeholder="Logradouro" 
                                                    id="logradouro"
                                                    onChange={handleInputChange}/>
                                            </div>
                                            <div className="txt-num">
                                                <input 
                                                    type="text" 
                                                    name="numero" 
                                                    value={values.numero}
                                                    placeholder="Número" 
                                                    id="numero"
                                                    onChange={handleInputChange}/>
                                            </div>
                                        </div>

                                        <div className="form-l">
                                            <div className="campo">
                                                <input 
                                                    type="text"
                                                    placeholder="CEP (xxxxx-xxx)"
                                                    name="cep"
                                                    value={values.cep} 
                                                    onChange={handleInputChange} 
                                                    id="cep" onBlur={onbluerCep} />
                                            </div>
                                            <div className="campo">
                                                <input 
                                                    type="text" 
                                                    placeholder="Cidade"
                                                    name="localidade"
                                                    value={values.localidade} 
                                                    onChange={handleInputChange} 
                                                    id="localidade" />
                                            </div>
                                            <div className="campo">
                                                <input 
                                                    type="text" 
                                                    placeholder="Bairro"
                                                    name="bairro" 
                                                    value={values.bairro}
                                                    onChange={handleInputChange} 
                                                    id="bairro" />
                                            </div>
                                    
                    
                                            <select name="uf" id="uf" 
                                                    value={values.uf}
                                                    onChange={handleInputChange}>
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

                                        <Button className="btn-cad">
                                            Cadastrar
                                        </Button>

                                    </div>
                                </FormsCadastro>
    );
}

export default CadastroNovoEnd;
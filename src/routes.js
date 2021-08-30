import React from'react';
import {Route, Switch} from 'react-router-dom'; 
import LoginPag from './pages/page-login';
import CadastroPage from './pages/page-cadastro';
import PagePrincipal from  './pages/page-principal';


export default function Rotas() {
    return(
        
        <Switch>

            <Route path="/"  exact component= {LoginPag}/>

            <Route path="/Cadastro" component = {CadastroPage}/>

            <Route path="/Inicio" component = {PagePrincipal}/>

        </Switch>  
    );
}

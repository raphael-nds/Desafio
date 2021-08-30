import React from 'react'
import { ContainerList } from '../styled/styled-cardLista';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import fireDb from '../firebase'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import DadosFirebase from './dadosFirebase';

const ListaEnd = ({dadosCard}) => {


    function marcarMap() {
        alert("marcado no mapa")
    }

    function marcarFavorito(){
        alert("marcado nos favoritos")
    }

    function deletarEnd(index){
        alert("deletado")
        
    }

    return (
        
        <ContainerList>
            <Table className="tabela">
                <Thead>
                    <Tr>
                        <Th>Logradouro</Th>
                        <Th>Número</Th>
                        <Th>Bairro</Th>
                        <Th>Cidade</Th>
                        <Th>Estado</Th>
                        <Th>Ações</Th>
                    </Tr>      
                </Thead>
                <Tbody>
                        <Tr>
                            <Td>Logradouro</Td>
                            <Td>Número</Td>
                            <Td>Bairro</Td>
                            <Td>Cidade</Td>
                            <Td>Estado</Td>
                            <Td>
                                <PinDropIcon onClick={() => marcarMap()}/>
                                <FavoriteIcon onClick={() => marcarFavorito()}/>
                                <DeleteIcon onClick={() => deletarEnd()}/>
                            </Td>
                        </Tr> 
                </Tbody>
            </Table>
        </ContainerList>       
         
    )
}

export default ListaEnd;


/*
 <Tr key={id}>
                                <Td>Logradouro</Td>
                                <Td>Número</Td>
                                <Td>Bairro</Td>
                                <Td>Cidade</Td>
                                <Td>Estado</Td>
                                <Td>
                                    <PinDropIcon onClick={() => marcarMap()}/>
                                    <FavoriteIcon onClick={() => marcarFavorito()}/>
                                    <DeleteIcon onClick={() => deletarEnd(id)}/>
                                </Td>
                            </Tr>*/
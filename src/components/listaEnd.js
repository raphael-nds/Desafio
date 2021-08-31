import React from 'react'
import { ContainerList } from '../styled/styled-cardLista';
import PinDropIcon from '@material-ui/icons/PinDrop';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react"

const ListaEnd = ({dadosCard, registeresAddress}) => {


    function marcarMap() {
        alert("marcado no mapa")
    }

    function marcarFavorito(){
        alert("marcado nos favoritos")
    }

    function deletarEnd(){
        alert("deletado")
        
    }

    return (
        
        <ContainerList>
            <Table className="tabela">
                <Thead>
                    <Tr>
                        <Th>CEP</Th>
                        <Th>Logradouro</Th>
                        <Th>Número</Th>
                        <Th>Bairro</Th>
                        <Th>Cidade</Th>
                        <Th>Estado</Th>
                        <Th>Ações</Th>
                    </Tr>      
                </Thead>
                <Tbody>
                  {registeresAddress.map((address, index) => (
                        <Tr key={index}>
                            <Td>{address.cep}</Td>
                            <Td>{address.logradouro}</Td>
                            <Td>{address.numero}</Td>
                            <Td>{address.bairro}</Td>
                            <Td>{address.localidade}</Td>
                            <Td>{address.uf}</Td>
                            <Td>
                                <PinDropIcon onClick={() => marcarMap()}/>
                                <FavoriteIcon onClick={() => marcarFavorito()}/>
                                <DeleteIcon onClick={() => deletarEnd()}/>
                            </Td>
                        </Tr>
                    ))
                    }
                </Tbody>
            </Table>
        </ContainerList>       
         
    )
}

export default ListaEnd;

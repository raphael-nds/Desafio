import {React} from 'react'
import Cadastro from '../components/cadastro';
import Mapp from '../components/Map';
import * as S from "../styled/styled-app";



function PageCad(){

 
  
  return (

          <S.Container>  
            <S.ContentForm>

              <Cadastro/>

            </S.ContentForm>


            <S.WrapperMap>
              <Mapp id="map" />
            </S.WrapperMap>
          </S.Container>
        
  );
}

export default PageCad;


/*{user? 
  <Login/>
    :  
  <Cadastro/>
}*/
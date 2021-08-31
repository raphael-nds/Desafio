import {React} from 'react'
import Login from '../components/login';
import Mapp from '../components/Map';
import Principal from '../components/principal';
import { useAuth } from '../hook/auth';
import * as S from "../styled/styled-app";


function PageLog() {

  const { user } = useAuth()

  return (
    <S.Container>  
        <S.ContentForm>

          {
              (user)?
              <Principal/>
              :
              <Login/>

          }

        </S.ContentForm>


        <S.WrapperMap>
          <Mapp id="map" />
        </S.WrapperMap>
    </S.Container>
       
  );
}

export default PageLog;

import {React} from 'react'
import Mapp from '../components/Map';
import Principal from '../components/principal';
import * as S from "../styled/styled-app";

const PagePrincipal = () => {
    return (
        <S.Container>  
            <S.ContentForm>
                <Principal/>
            </S.ContentForm>

            <S.WrapperMap>
              <Mapp id="map" />
            </S.WrapperMap>
        </S.Container>
       
    )
}

export default PagePrincipal;
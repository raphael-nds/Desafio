import {React} from 'react'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hook/auth';
import Rotas from  './routes'



function App() {

  
  
  return (
        <BrowserRouter>
          
          <AuthProvider>
            <Rotas/>
          </AuthProvider>
     </BrowserRouter>
  );
}

export default App;


/*{user? 
  <Login/>
    :  
  <Cadastro/>
}*/
import Cadastro from '../components/cadastro';
import { Modal } from './styled-modalCad';

const ModalCadEnd = ({id = 'modal' , onClose = () => {},children}) => {

    /*const clicarFora = (e) => {
        if(e.target.id === id)
            onClose();
    }*/

    return(
        <Modal id={id} className="modal  " /*onClick={clicarFora}*/>
            
            <div className="container">
                <button className="fechar" onClick={onClose}/>
                <div>{children}

                </div>
            </div>
        </Modal>
    );
}

export default ModalCadEnd;
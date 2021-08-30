import { Modal } from './styled-modalLista';

const ModalListaEnd = ({id = 'modal' , onClose = () => {},children}) => {

    /*const clicarFora = (e) => {
        if(e.target.id === id)
            onClose();
    }*/

    return(
       <Modal>
           <div className="containerLista">
                <button className="fechar" onClick={onClose}/>
                <div>{children}
                    
                </div>
           </div>
       </Modal>
    );
}

export default ModalListaEnd;
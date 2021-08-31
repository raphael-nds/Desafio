import db from './firebase';

const collectionEnd = "endLocalizacao"

// adicionar dados no firestore
export const addEndLocFirebase = (values) => 
    db
        .collection(collectionEnd)
        .add({
            logradouro: values.logradouro,
            numero: values.numero,
            cep: values.cep,
            localidade: values.localidade,
            bairro: values.bairro,
            uf: values.uf
        });

// recuperar dados do firestore
export const recuperarEndLocFirebase =  async () => {
    let array = [];

    await db.collection(collectionEnd)
        .get()
        .then((res_array) => 
            {
                res_array.forEach((doc) => {
                    const item = doc.data();
                    const idD = doc.id
                    array.push({...item,id:idD})
                })
            }
        );

        
    return array
};


// deletar dados
export const DeleteData =  async(id) => {
    await db.collection(collectionEnd)
        .get()
        .then((res_array) => {
            res_array.forEach((doc ) => { 
                const idItem = doc.id;

                if(id === idItem){
                    db.collection(collectionEnd).doc(idItem).delete()
                    
                }
                
            });
             
        });
};
       

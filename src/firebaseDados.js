import db from './firebase';

const collectionEnd = "endLocalizacao"

// adicionar dados no firestore
export const addEndLocFirebase = (values) => 
    db
        .collection(collectionEnd)
        .add({
            lograouro: values.logradouro,
            numero: values.numero,
            cep: values.cep,
            localidade: values.localidade,
            bairro: values.bairro,
            uf: values.uf});

// recuperar dados do firestore
export const recuperarEndLocFirebase =  async () => {
    let array = [];

    await db.collection(collectionEnd)
        .get()
        .then((res_array) => 
            {
                res_array.forEach((doc) => {
                    const item = doc.data();
                    array.push(item)

                    console.log('item', item)
                })
            }
        );

        
    return array
};


// deletar dados
export const DeleteData = async(id) => {
  await db.collection(collectionEnd).doc(id).delete()  
  .then(() => {
    console.log("deletado com sucesso")
  }).catch((error) =>{
      console.log("error ao deletar")
  });   
}

// deletar

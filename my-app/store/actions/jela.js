export const GET_JELA = 'GET_JELA'
export const GET_JELO = 'GET_JELO'
export const POST_JELO = 'POST_JELO'
export const PUT_JELO = 'PUT_JELO'
export const DELETE_JELO = 'DELETE_JELO'
export const FILTRIRANA_JELA = 'FILTRIRANA_JELA'



import AsyncStorage from '@react-native-async-storage/async-storage';
//const osnovniUrl = 'http://localhost:3001/api/jela'
const osnovniUrl = 'http://ipadress/api/jela' 

export const getJela = () => {
    return{
        type:GET_JELA
    }
}

export const getJelo = (id) => {
   return{
    type:GET_JELO,
    idJelo:id,
   }
}
export const postJela = (newJelo) => {
    console.log(newJelo)
    return{
        type:POST_JELO,
        payload: newJelo,
        
    }
}
export const putJelo = (newJelo, id) => {
    return{
        type:PUT_JELO,
        idJelo:id,
        payload:newJelo,
    }
}
export const deleteJelo = (id) => {
    return{
        type:DELETE_JELO,
    idJelo:id,
    }
}
export const filterJela = (pojam) => {
    return {
        type: FILTRIRANA_JELA,
        pojam: pojam
    }
}

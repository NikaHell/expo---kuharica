export const GET_KORISNIK = 'GET_KORISNIK'
export const POST_KORISNIK = 'POST_KORISNIK'



export const getKorisnik = (id) => {
   return{
    type:GET_KORISNIK,
    idJelo:id,
   }
}
export const postKorisnik = (novi) => {
    console.log(novi)
    return{
        type:POST_KORISNIK,
        payload: novi,
        
    }
}

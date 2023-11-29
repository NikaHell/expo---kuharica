import { GET_KORISNIK, POST_KORISNIK} from "../actions/korisnik";
import { KORISNIK } from "../../data/korisnik";
const pocetnoStanje = {
  korisnici: KORISNIK,
  
};

const korisnikReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
  
    case GET_KORISNIK:
      return { ...state, korisnici: action.id };

    case POST_KORISNIK:
      const spoji = state.korisnici.concat(action.payload);

      return { ...state, korisnici: spoji };

      default:
        return state;
};
}
export default korisnikReducer;

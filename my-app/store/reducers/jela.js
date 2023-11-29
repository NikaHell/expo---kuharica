import { GET_JELA, GET_JELO, POST_JELO, PUT_JELO , DELETE_JELO,FILTRIRANA_JELA} from "../actions/jela";
import { JELO } from "../../data/jelo";
const pocetnoStanje = {
  jela: JELO,
  filterjela: JELO,
};

const jelaReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case GET_JELA:
      return { ...state, jela: action.id };
    case GET_JELO:
      return { ...state, jela: action.id };

    case POST_JELO:
      const spoji = state.jela.concat(action.payload);

      return { ...state, jela: spoji };

    case PUT_JELO:
      const novi = action.payload
      const stari = state.jela.find((j) => j.id === action.idJelo)
      
      let noviniz = state.jela
      noviniz.splice(stari.id,1,novi)
      // console.log("Novi: ",novi)
      // console.log("Stari: ",stari)
      // console.log("JELA: ",state.jela)
      
      return { ...state, jela: noviniz };

    case DELETE_JELO:
      const novo = state.jela.filter((ev) => ev.id !== action.idJelo);
      return { ...state, jela: novo };
    case FILTRIRANA_JELA:

      const odabrani = state.jela.filter(
        (j) =>
          j.naziv.toLowerCase().includes(action.pojam.toLowerCase()) ||
          j.kategorija.toLowerCase().includes(action.pojam.toLowerCase()) ||
          j.sastojci.toLowerCase().includes(action.pojam.toLowerCase())
      );
      return { ...state, filterjela: odabrani };
    default:
      return state;
  }
};

export default jelaReducer;

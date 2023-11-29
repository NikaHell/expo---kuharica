import {  combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk'

import jelaReducer from './reducers/jela';
import korisnikReducer from './reducers/korisnik';


const glavniReducer = combineReducers({
    jela: jelaReducer,
    korisnici: korisnikReducer,
    
});

export const Store = createStore(glavniReducer, applyMiddleware(thunk));

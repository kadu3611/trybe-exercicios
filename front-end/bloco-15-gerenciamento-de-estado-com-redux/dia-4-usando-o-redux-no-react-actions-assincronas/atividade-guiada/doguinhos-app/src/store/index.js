// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

// actions 

function getImage(json) { // action getImage
   // console.log(json );
  return { type: GET_IMAGE, payload: json.message };
}

function requestDog() { // action requestDog
  return { type: REQUEST_IMAGE };
}

function failedRequest(error) { // action fail
  return { type: FAILED_REQUEST, payload: error };
}

// fetch assicrono

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog()); // Aqui é feito a requisição na função colocando o isFetching como true
    // para que apareça a imagem de loading até que a requisição seja feita. Que é logo abaixo
    return fetch('https://dog.ceo/api/breeds/image/random') // requisição do fetch feita
      .then(response => response.json()) // requisição tratada
      .then(json => dispatch(getImage(json))) // Dispachada o json para a função getImage
      // Ela tornará o load false e colocará no imagePath o link do json
      .catch(error => dispatch(failedRequest(error))) // em caso de erros na requisição da fetch
      // será lançado um erro como retorno com status do json
  };
}

// reducer

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
    console.log(action.payload);
  switch (action.type) {
    case REQUEST_IMAGE: // 
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
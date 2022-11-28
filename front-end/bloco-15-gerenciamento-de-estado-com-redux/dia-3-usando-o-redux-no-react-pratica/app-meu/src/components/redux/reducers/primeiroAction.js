import { CHANGE_NAME } from '../actions/action';

const INITIAL_STATE = {
  nome: '',
  email: '',

};

const primeiroAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_NAME:
    return {
      ...state,
      nome: action.payload.nome,
      email: action.payload.email,
    };
  default:
    return state;
  }
};

export default primeiroAction;


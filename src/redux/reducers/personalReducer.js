const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_PERSONAL_FORM':
    return {
      ...state,
      nome: action.payload.nome,
      email: action.payload.email,
      cpf: action.payload.cpf,
      endereco: action.payload.endereco,
      cidade: action.payload.cidade,
      estado: action.payload.estado,
    };
  default:
    return state;
  }
};

export default personalReducer;

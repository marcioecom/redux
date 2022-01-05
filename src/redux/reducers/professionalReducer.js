const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SEND_PROFESSIONAL_FORM':
    return {
      ...state,
      curriculo: action.payload.curriculo,
      descricao: action.payload.descricao,
      cargo: action.payload.cargo,
    };
  default:
    return state;
  }
};

export default professionalReducer;

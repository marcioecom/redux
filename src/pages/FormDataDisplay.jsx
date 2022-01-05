import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  backToPreviusPage = () => {
    const { history: { goBack } } = this.props;
    goBack();
  }

  render() {
    // Recupere as informações do seu estado criado no Redux
    // console.log(this.props);
    const {
      personalState: {
        nome, email, cpf, endereco, cidade, estado,
      },
      professionalState: {
        curriculo, cargo, descricao,
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
        <button
          type="button"
          onClick={ () => this.backToPreviusPage() }
        >
          Voltar
        </button>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalState: PropTypes.object,
  professionalState: PropTypes.object,
}.required;

const mapStateToProps = (state) => ({
  personalState: state.personalReducer,
  professionalState: state.professionalReducer,
});

export default connect(mapStateToProps, null)(FormDataDisplay);

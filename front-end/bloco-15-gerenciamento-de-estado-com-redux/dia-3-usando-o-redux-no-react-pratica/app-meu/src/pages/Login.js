import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../pages/Input';
import { connect } from 'react-redux';
import { actionChangeName } from '../components/redux/actions/action';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          nome: '',
          email: '', // receberá todo o formulário preenchido;
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange({ target }) {
        const { name, value } = target;
        this.setState({ [name]: value }, () => {
          const { nome, email } = this.state;
          const obejtoGeral = {
            nome,
            email,
          };
          this.setState({
            obejtoGeral,
          });
        });
      }
       click = () => {  
        const { history, addFormulario } = this.props;
        addFormulario(this.state);
        history.push('/clientes');
      }
  render(){
    const { nome, email } = this.state;
  return (
    <fieldset>
    <Input
      label="nome: "
      type="text"
      onChange={ this.handleChange }
      value={ nome }
      name="nome"
      required
    />
    <Input
      label="email: "
      type="text"
      onChange={ this.handleChange }
      value={ email }
      name="email"
      required
    />
    <button
              type="submit"
              onClick={ this.click } >
              Pesquisar
            </button>
    </fieldset>
    
  );
}
}

const mapDispatchToProps = (dispatch) => ({ // puxaFunctionDoRedux()
    addFormulario: (state) => dispatch(actionChangeName(state)),
  });
  // addForm um apelido para action actionChangeName
  // obejtoGeral é passado para ser recebido em actionChangeName
  
  export default connect(null, mapDispatchToProps)(Login);
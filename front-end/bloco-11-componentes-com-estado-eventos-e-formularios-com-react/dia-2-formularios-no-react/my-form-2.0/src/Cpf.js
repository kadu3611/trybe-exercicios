import React, {Component} from 'react';


class Cpf extends Component {

render(){
    
    const { cpf, funccion } = this.props;
       return(
    <label> CPF
    <input onChange={funccion} type='text' name='cpf' value = {cpf} maxLength='11' required/>

  </label>
    )
}

}
export default Cpf


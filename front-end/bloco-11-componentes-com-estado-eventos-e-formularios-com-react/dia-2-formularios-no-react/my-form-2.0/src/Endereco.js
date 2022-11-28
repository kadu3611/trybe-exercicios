import React, {Component} from 'react';


class Endereco extends Component {

render(){
    
    const { endereco, funccion } = this.props;
    let erro = undefined
    if(endereco.length > 200) erro = 'Texto muito grande!';

       return(
    <label> Endereço
    <input onChange={funccion} type='text' name='endereco' value = {endereco} required/>
    <div>{erro ? erro : ''}</div>
  </label>
    )
}

}
export default Endereco


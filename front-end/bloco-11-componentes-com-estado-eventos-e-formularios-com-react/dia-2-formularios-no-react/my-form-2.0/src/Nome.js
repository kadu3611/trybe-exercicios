import React, {Component} from 'react';


class Nome extends Component {

render(){
    
    const { nome, funccion } = this.props;
    let erro = undefined
    if(nome.length > 40) erro = 'Texto muito grande!';

       return(
    <label> Nome
    <input onChange={funccion} type='text' name='nome' value = {nome.toUpperCase()} required/>
    <div>{erro ? erro : ''}</div>
  </label>
    )
}

}
export default Nome


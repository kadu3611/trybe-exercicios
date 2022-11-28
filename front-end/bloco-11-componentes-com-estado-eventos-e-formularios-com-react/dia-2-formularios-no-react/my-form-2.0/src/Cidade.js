import React, {Component} from 'react';



class Cidade extends Component {

render(){
    
    const { cidade, funccion, onBlur } = this.props;
    let erro = undefined
    if(cidade.length > 28) erro = 'Texto muito grande!';


       return(
    <label> Cidade
    <input onChange={funccion} type='text' name='cidade' maxLength='29' value = {cidade} 
    onBlur={onBlur} required />
    <div>{erro ? erro : ''}</div>
  </label>
    )
}

}
export default Cidade


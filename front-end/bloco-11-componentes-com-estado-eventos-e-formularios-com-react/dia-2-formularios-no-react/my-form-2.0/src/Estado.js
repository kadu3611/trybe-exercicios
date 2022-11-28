import React, {Component} from 'react';



class Estado extends Component {

render(){
    
    const { estado, funccion } = this.props;
   
       return(
    <select name = 'estado' value = {estado} onChange={funccion} required> Estado
   <option value = 'Minas Gerais'>Minas Gerais</option>
   <option value = 'São Paulo'>São Paulo</option>
   <option value = 'Goias'>Goias</option>
   <option value = 'Santa Catarina'>Santa Catarina</option>
   <option value = 'Rio de Janeiro'>Rio de Janeiro</option>
   <option value = 'Rio Grande do Sul'>Rio Grande do Sul</option>
   <option value = 'Paraná'>Paraná</option>
   <option value = 'Paraiba'>Paraiba</option>
  </select>
    )
}

}
export default Estado


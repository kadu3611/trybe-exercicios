import React, {Component} from 'react';


class Tipo extends Component {

render(){
    
    const { funccion } = this.props;
       return(
        <div>
        <label> 
        <input onChange={funccion} type='radio' name='tipo' value = 'Casa'/> Casa
        </label>
        <label> 
        <input onChange={funccion} type='radio' name='tipo' value = 'Apartamento'/> Apartamento
        </label>
        </div>
        )
}

}
export default Tipo


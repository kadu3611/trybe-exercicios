import React, {Component} from 'react';


class Email extends Component {

render(){
    
    const { email, funccion } = this.props;
    let erro = undefined
    if(email.length > 50) erro = 'Texto muito grande!';

       return(
    <label> Email
    <input onChange={funccion} type='text' name='email' value = {email} required/>
    <div>{erro ? erro : ''}</div>
  </label>
    )
}

}
export default Email


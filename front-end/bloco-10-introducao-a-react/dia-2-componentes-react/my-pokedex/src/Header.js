import "./Header.css";//css importado // ao contrario dos outros arquivos os .css não precisa ser exportado no seu arquivo
import React from "react"; // Importando o React, porque ele é uma framework 


class Header extends React.Component{
    render(){

        const { title } =  this.props;
        return <header className="titleCss" >{this.props.title}</header>;
    }

}
export default Header// importado para ser utilizado em outro arquivo
import React from "react";


class Novo extends React.Component {
    constructor(props) {
super();
this.state = {
  showProfile: true,
};

this.changeProfile = this.changeProfile.bind(this);

    }
render(){

        const { showProfile } = this.state;

return (
  <div className="gitNetwork d-flex flex-column justify-content-center">
    { showProfile ? <Profile /> : null }
    <div className="central d-flex justify-content-center">
      <button
        className="btn btn-dark align-self-center"
        type="button"
        onClick={ this.changeProfile }
      >
        Mostrar / Ocultar Perfil
      </button>
    </div>
  <Connections />
</div>
);
}


}

export default Novo
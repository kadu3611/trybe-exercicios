import React from 'react';

class Service extends React.Component {
    render() {
        const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

        // const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;
        return <p>{ retornaNumeroAleatorio } </p>;
    }
};

export default Service;

import React from 'react';

class Joke extends React.Component {
  render() {
      console.log(this.props);
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <p>{jokeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }
}

export default Joke;
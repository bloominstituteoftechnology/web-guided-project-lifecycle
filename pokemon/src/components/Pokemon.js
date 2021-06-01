import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {
  render() {
    return (
      <>
        {this.props.pokemon.map(pokemon => (
          <Poki key={pokemon.id} pokemon={pokemon}/>
        ))}
      </>
    );
  }
}

export default Pokemon;

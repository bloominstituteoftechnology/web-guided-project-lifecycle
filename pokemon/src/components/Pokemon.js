import React from 'react';
import Poki from './Poki';

class Pokemon extends React.Component {

  componentDidMount() {
    console.log("Pokemon: component has mounted")
  }

  componentDidUpdate() {
    console.log("Pokemon: component has updated")
  }
  
  render() {
    console.log("Pokemon: component Renders DOM")
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

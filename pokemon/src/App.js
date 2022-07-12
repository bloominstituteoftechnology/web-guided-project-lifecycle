import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  state = {
      pokemon: []
    };

  componentDidMount() {
    console.log("App: component has mounted")
    setTimeout(() => {
      this.setState({
        pokemon: data
      })
    }, 3000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App: component has updated")
    console.log("old state:", prevState)
    console.log("new state:", this.state)

    if (this.state.pokemon.length !== prevState.pokemon.length) {
      // make api calls
      // update some state
    }
  }

  render() {
    console.log("App: component Renders DOM")
    return (
      <div className="App">
        {this.state.pokemon.length !== 0 ? <Pokemon pokemon={this.state.pokemon} /> : <p>Loading ...</p> } 
      </div>
    );
  }
}

export default App;

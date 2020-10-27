import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

class App extends React.Component {
  state = {
    doggos: [],
    doggoText: ''
  };

  componentDidMount() {
    console.log('CDM');
    fetch('https://dog.ceo/api/breed/husky/images')
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message }))
      .catch(err => console.log('noooo'));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU running');
    if (prevState.doggos !== this.state.doggos) {
      console.log('doggos have changed');
      if (this.state.doggoText === 'chihuahua') {
        console.log('ewwww its a chihuahua...');
        fetch(`https://dog.ceo/api/breed/husky/images`)
          .then(res => res.json())
          .then(dogs =>
            this.setState({
              doggos: dogs.message,
              doggoText: 'husky'
            })
          )
          .catch(err => console.log('noooo'));
      }
    }
  }

  handleChanges = e => {
    this.setState({ doggoText: e.target.value });
  };

  fetchDoggos = e => {
    e.preventDefault();
    fetch(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
      .then(res => res.json())
      .then(dogs =>
        this.setState({
          doggos: dogs.message
        })
      )
      .catch(err => console.log('noooo'));
  };

  render() {
    console.log('rendering');
    return (
      <div className="App">
        <h1>Hello Doggos</h1>
        <input
          type="text"
          value={this.state.doggoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchDoggos}>Fetch doggos</button>
        <div className="doggos">
          {this.state.doggos.map(doggo => (
            <img width="200" src={doggo} key={doggo} alt={doggo} />
          ))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

class App extends React.Component {
    state = {
        doggos: [],
        currentBreed: "pug"
    }

    componentDidMount() {
        console.log("componentDidMount")
        axios.get(`https://dog.ceo/api/breed/${this.state.currentBreed}/images`)
            .then(res => {
                console.log("API doggo response")
                this.setState({
                    doggos: res.data.message
                })
            })
    }

    searchDogs = breedInput => {
        axios.get(`https://dog.ceo/api/breed/${breedInput}/images`)
        .then(res => {
            console.log(res)
            this.setState({
                currentBreed: breedInput,
                doggos: res.data.message
            })
        })
    }
    render() {
        console.log("component is rendering DOM", )
        return (
            <div className="App">
                <h1>Hello Doggos</h1>
                <SearchForm searchDogs={this.searchDogs} />
                <div className="doggos">
                    {this.state.doggos.map(doggoUrl => (
                        <img width="200" src={doggoUrl} key={doggoUrl} alt={doggoUrl} />
                    )
                    )}
                </div>
            </div>
        )
    }
}

export default App;
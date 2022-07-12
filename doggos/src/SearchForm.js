import React from 'react';

class SearchForm extends React.Component {
    state = {
        inputValue: '' //a
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // searchDog
        this.props.searchDogs(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.inputValue} type="text" />
                    <button>Fetch Dogs</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;
import React from "react";

class AppClass extends React.Component {

  state = {
    name: "Warren",
    age: 102
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Component changes state")
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount() {
    console.log("AppClass: Component has mounted")
  }

  componentDidUpdate() {
    console.log("AppClass: Component has updated")
  }
  
  render() {
    console.log("AppClass: Component Renders DOM")
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IT ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

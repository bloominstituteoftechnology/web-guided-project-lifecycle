import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

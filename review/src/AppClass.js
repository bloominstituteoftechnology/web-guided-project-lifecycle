import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
    console.log("APPCLASS: Component Constructed");
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  componentDidMount() {
    console.log("APPCLASS: Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("APPCLASS: Component Updated");
    console.log("PROPS---------------");
    console.log(prevProps, this.props);
    console.log("STATE---------------");
    console.log(prevState, this.state);

    if(this.state.name !== prevState.name) {

    }
  }

  render() {
    console.log("APPCLASS: Component Rendered");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

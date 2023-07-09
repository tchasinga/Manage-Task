import React, { Component } from "react";

class Counting extends Component {
  constructor() {
    super();
    this.state = {
      numbering: 0,
    };
  }

  increment = () => {
    this.setState({
      numbering: this.state.numbering + 1,
    });
  };

  render() {
    return (
      <div>
        <h3 style={{ marginTop: "2rem" }}>Why Use React?</h3>
        <p>Get counter Number: {this.state.numbering}</p>
        <button onClick={this.increment}>Click counter</button>
      </div>
    );
  }
}

export default Counting;

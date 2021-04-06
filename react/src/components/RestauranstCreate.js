import React, { Component } from "react";

class RestauranstCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
    };
  }

  createRest = () => {
    fetch("http://localhost:3000/restaurant", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) =>
      result.json().then((response) => alert("Field created"))
    );
  };
  render() {
    return (
      <div>
        <h1>RestauranstCreate</h1>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
          placeholder="Restourant Name"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
          placeholder="Restourant Address"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
          placeholder="Restourant Email"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ rating: e.target.value });
          }}
          placeholder="Restourant Ratings"
        />
        <br />
        <br />
        <button onClick={this.createRest}>Add Restourant</button>
      </div>
    );
  }
}

export default RestauranstCreate;

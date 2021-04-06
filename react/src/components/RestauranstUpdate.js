import React, { Component } from "react";

class RestauranstUpdate extends Component {
  render() {
    console.log("hi", this.props.match.params.id);
    return (
      <div>
        <h1>RestauranstUpdate</h1>
      </div>
    );
  }
}

export default RestauranstUpdate;

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class RestauranstList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant")
      .then((res) => res.json())
      .then((data) => this.setState({ list: data }));
  }
  render() {
    return (
      <div>
        <h1>RestauranstList</h1>
        {this.state.list ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>Ratings</th>
                <th>email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.rating}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h2>Loading... Please wait!</h2>
        )}
      </div>
    );
  }
}

export default RestauranstList;

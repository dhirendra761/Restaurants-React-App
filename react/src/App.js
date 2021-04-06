import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./components/Home";
import RestauranstList from "./components/RestauranstList";
import RestauranstCreate from "./components/RestauranstCreate";
import RestauranstDetail from "./components/RestauranstDetail";
import RestauranstSearch from "./components/RestauranstSearch";
import RestauranstUpdate from "./components/RestauranstUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Restourants</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/list">List</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/create">Create</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/search">Search</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/update">Details</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/details">Update</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/list">
          <RestauranstList />
        </Route>
        <Route path="/create">
          <RestauranstCreate />
        </Route>
        <Route path="/search">
          <RestauranstSearch />
        </Route>
        <Route path="/details">
          <RestauranstDetail />
        </Route>
        <Route
          path="/update/:id"
          render={(props) => <RestauranstUpdate {...props} />}
        ></Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;

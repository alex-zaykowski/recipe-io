import { Nav, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/navigation.css';

const Navigation = () => {
  const sendSearch = (search) => {
    if( search !== ""){
      console.log(search);
    }
  }

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>Recipes.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/">Explore</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Recipes"
              className="mr-2"
              aria-label="Search"
              id="search-bar"
            />
            <Button variant="outline-primary my-2 my-sm-0" id="search-btn" 
              onClick={ () =>
                sendSearch(document.querySelector('#search-bar').value)
              }
            >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
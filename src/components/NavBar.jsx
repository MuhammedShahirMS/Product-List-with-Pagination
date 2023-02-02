import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function ContainerOutsideExample() {
  return (
    <Navbar fixed='top' bg="black" expand='md' variant="dark">
    <Container fluid>
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Features</Nav.Link>
        <Nav.Link href="/">Pricing</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default ContainerOutsideExample;
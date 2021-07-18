import React from 'react'
import About from './pages/AboutMe';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import './styling/App.css'



function App() {
  return (
    <div className="App">
<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home">Jasper Abarquez</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Projects</Nav.Link>
  <Nav.Link href="#pricing">Contact</Nav.Link>
</Nav>
</Container>
</Navbar>
<About/>
    </div>
  );
}

export default App;

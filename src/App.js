import React from 'react'
//COMPONENTS
import About from './pages/AboutMe';
import MyName from './components/AboutComponents/MyName';

//Style Components
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
<MyName/>
<About/>
    </div>
  );
}

export default App;

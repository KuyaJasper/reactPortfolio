import React from 'react'
//COMPONENTS
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MyName from './components/AboutComponents/MyName';
import Nav from './components/Nav';
import Footer from './components/Footer';

//Style Components
import './styling/App.css'


//Router
import { Switch, Route, useLocation} from "react-router-dom";


function App() {

const location = useLocation();

  return (
    <div className="App">
      <Nav/>
<Switch location={location} key={location.pathname}>
  <Route path="/" exact>
<MyName/>
<About/>
</Route>
  <Route path="/projects" exact>
    <Projects/>
  </Route>
  <Route path="/contact" exact>
    <Contact/>
  </Route>
</Switch>
<Footer/>
    </div>
  );
}

export default App;

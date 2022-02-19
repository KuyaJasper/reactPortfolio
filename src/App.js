import React from "react";

// Componenets
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MyName from "./components/AboutComponents/MyName";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";

//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();


  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <MyName />
          <About />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;


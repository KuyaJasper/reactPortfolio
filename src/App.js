import React from 'react'
//COMPONENTS
import About from './pages/AboutMe';
import MyName from './components/AboutComponents/MyName';

//Style Components
import './styling/App.css'



function App() {
  return (
    <div className="App">
<MyName/>
<About/>
    </div>
  );
}

export default App;

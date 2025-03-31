import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Work/Works';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return(
    <div className='App'>
  <Navbar></Navbar>
  <Intro></Intro>
  <Skills></Skills>
  <Works></Works>
  <Contact></Contact>
  <Footer></Footer>
  </div>
);}

export default App;

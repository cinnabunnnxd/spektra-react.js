import logo from './logo.svg';
import './App.css';
import Header from './coms/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services  from './pages/Services';



function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/Homepage' element={<Homepage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

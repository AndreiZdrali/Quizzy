import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
            <Link className="navbar-link" to="/">Play</Link>
            <Link className="navbar-link" to="/about">About</Link>
            <Link className="navbar-link" to="/contact">Contact</Link>
        </nav>

        <div className="page-container"> { /* posibil inutil */ }
          <Routes>
            <Route path="/" element={<Navigate to="/play" replace />} />
            <Route path="/play/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

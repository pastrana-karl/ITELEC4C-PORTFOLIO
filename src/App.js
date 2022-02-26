import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import FootBar from './Components/FootBar/FootBar';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path = '/' element = {<Home/>} />
      </Routes>
      <FootBar />
    </Router>
  );
}

export default App

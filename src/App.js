import Home from './components/Home';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import MusicVideoPage from './pages/MusicVideoPage';
import AppVideoPage from './pages/AppVideoPage';
import CharacterPage from './pages/CharacterPage';
import AnimationPage from './pages/AnimationPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<PlanetPage />} />
          <Route path="/musicvideos" element={<MusicVideoPage />} />
          <Route path="/appvideos" element={<AppVideoPage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/animation" element={<AnimationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

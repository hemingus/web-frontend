import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import VideoPage from './pages/VideoPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planets" element={<PlanetPage />} />
          <Route path="/videos" element={<VideoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';
import ShufflingImage from './components/imageComponents/ShufflingImage';
import VideoContainer from './components/VideoContainer/VideoContainer';
import MainMenu from './components/MainMenu/MainMenu';
import InteractiveLogo from './components/InteractiveLogo/InteractiveLogo';
import CommentField from './components/CommentField/CommentField';
import StarwarsPlanetContainer from './components/StarwarsPlanetContainer/StarwarsPlanetContainer';
import axios from 'axios'
import {useState, useEffect} from 'react'

const embedIds = ["HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU"];
const images = ["gulkins1.jpg", "gulkins2.jpg", "hemingdrums.jpg"];


function App() {
  useEffect(() => {
    getPlanets();
  })
  const [planets, setPlanets] = useState([])
  const getPlanets = async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/planets");
      setPlanets(res.data.results);  
    }
    catch (err) {
      alert(err.message);
    }
    
    console.log(planets);
  }
  

  return (
    <div className="App"> 
      <Header />
      <StarwarsPlanetContainer planets={planets} />
      <InteractiveLogo logoId="heminglogo.png" />
      <MainMenu />
      <ShufflingImage imageList={images} />
      <YoutubeEmbed embedId="HTXG2Xy0dsU" />
      <VideoContainer embedIds={embedIds} />
      <CommentField />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import YoutubeEmbed from './components/YoutubeEmbed/YoutubeEmbed';
import ShufflingImage from './components/imageComponents/ShufflingImage';
import VideoContainer from './components/VideoContainer/VideoContainer';
import MainMenu from './components/MainMenu/MainMenu';
import InteractiveLogo from './components/InteractiveLogo/InteractiveLogo';

const embedIds = ["HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU", "HTXG2Xy0dsU"];
const images = ["gulkins1.jpg", "gulkins2.jpg", "hemingdrums.jpg"];

function App() {
  return (
    <div className="App"> 
      <Header />
      <InteractiveLogo logoId="heminglogo.png"/>
      <MainMenu />
      <ShufflingImage imageList={images} />
      <YoutubeEmbed embedId="HTXG2Xy0dsU" />
      <VideoContainer embedIds={embedIds} />
      <Footer />
    </div>
  );
}

export default App;

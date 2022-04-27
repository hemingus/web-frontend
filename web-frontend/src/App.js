import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShufflingImage from './components/imageComponents/ShufflingImage';

function App() {
  return (
    <div className="App"> 
      <Header />
      <ShufflingImage imageList={["gulkins1.jpg", "gulkins2.jpg", "hemingdrums.jpg"]} />
      <Footer />
    </div>
  );
}

export default App;

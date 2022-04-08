import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ShufflingImage from './components/imageComponents/ShufflingImage';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ShufflingImage imageList={["gulkins1.jpg", "gulkins2.jpg"]} />
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

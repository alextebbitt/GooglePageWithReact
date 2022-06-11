
import './App.css';
import {Header} from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import microphone from './assets/microphone.svg';
import search from './assets/search.svg';
import googleappicon from './assets/googleappicon.png';
function App() {
  return (
    <div className="App">
     <Header  />
      <Home microphone={microphone}
      search = {search}/>
      <Footer googleappicon = {googleappicon} />
    </div>
  );
}

export default App;

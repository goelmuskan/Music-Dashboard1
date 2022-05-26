import './App.css';
import y from './music.jpg';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {faSearch} from '@fortawesome/free-solid-svg-icons';
 
import Audio from './components/Audio';





function App() {
  return (
    
    <div className="App container-fluid">
      <h1 id="header">
              My Music App
    </h1>
    <div class="row">
      <div class="column1"> 
        <img src={y} id="image"/>
      </div>
      <div class="column3">
          <div className="audio-banner container">
            <Audio/>
          </div>
      </div>
    </div>
    
    </div>
  );
}

export default App;

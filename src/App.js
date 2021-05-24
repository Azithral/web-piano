import './App.css';
import SmallWebPiano from './smallWebPiano';
import WebPiano from './webPiano';

function App() {

  const smallScreen = window.matchMedia("(max-width: 700px)").matches;


  return (
    <div className="App">
      {!smallScreen && <WebPiano/>}
      {smallScreen && <SmallWebPiano/>}
    </div>
  );
}

export default App;

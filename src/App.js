import './App.css';
import requests from './requests';
import Row from './components/Row/Row.jsx';

function App() {
  return (
    <div className="App">
      <h1>netflix-clone w react 🎥💙</h1>

      <Row title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" url={requests.fetchTrending} />
    </div>
  );
}

export default App;

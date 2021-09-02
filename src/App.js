import './App.css';
import requests from './requests';
import Row from './components/Row/Row.jsx';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <Row isLargeRow title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" url={requests.fetchTrending} />
      <Row title="Top Rated" url={requests.fetchTopRated} />
      <Row title="Action Movies" url={requests.fetchActionMovies} />
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" url={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

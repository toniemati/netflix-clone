import { useEffect, useState } from 'react';
import './Banner.css';
import tmdb from '../../axios';
import requests from '../../requests';

const Banner = () => {
  const [movie, setMovie] = useState({});

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await tmdb.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
      return response;
    }
    fetchData();
  }, []);

  return (
    <header className="banner" style={{backgroundPosition: 'center center', backgroundSize: 'cover', backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title ?? movie?.name ?? movie?.original_name}</h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  )
}

export default Banner

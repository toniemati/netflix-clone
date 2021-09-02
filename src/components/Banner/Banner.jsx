import { useEffect, useState } from 'react';
import './Banner.css';
import tmdb from '../../axios';
import requests from '../../requests';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await tmdb.get(requests.fetchNetflixOriginals);
      setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
      return response;
    }
    fetchData();
  }, []);

  return (
    <header className="banner"> 
      {/* title */}
      {/* div -> 2 buttons */}
      {/* description */}
    </header>
  )
}

export default Banner

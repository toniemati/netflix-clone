import { useEffect, useState } from 'react';
import './Row.css';
import tmdb from '../../axios';

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  //* Fetch movies
  useEffect(() => {
    const fetchData = async () => {
      const response = await tmdb.get(url);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [url]);

  return (
    <div>
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  )
}

export default Row

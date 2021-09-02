import { useEffect, useRef, useState } from 'react';
import './Row.css';
import tmdb from '../../axios';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const ref = useRef();
  
  //* Setup mousescroll for x axis insted y
  useEffect(() => {
    if (!ref.current) return;

    ref.current.addEventListener('wheel', (e) => {
      e.preventDefault();
      ref.current.scrollLeft += e.deltaY;
    })
  }, [ref]);

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
    <div className="row">
      <h2>{title}</h2>

      <div ref={ref} className="row__posters">
        {/* several row__poster(s) */}
        {movies.map((movie) => (
          <img className={`row__poster ${isLargeRow && 'row__poster--large'}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row

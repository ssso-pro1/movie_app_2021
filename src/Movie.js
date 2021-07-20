import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
  return (
    //class 대신 className
    <div className='movies__movie'>
      <img src={poster} alt={title} title={title} />
      {/* <h3 className='movie__title' style={{ backgroundColor: 'red' }}> */}
      {/* css on top of js : {{}} */}
      <h3 className='movie__title'>{title}</h3>
      <h5 className='movie__year'>{year}</h5>
      <ul className='movie__genres'>
        {genres.map((genre, index) => (
          <li key={index} className='genres__genre'>
            {genre}
          </li>
        ))}
      </ul>
      <p className='movie__summary'>{summary.slice(0, 140)}...</p>
      {/* 동일한 높이로 보이도록 140글자 수 까지만 */}
    </div>
  ); //return 하는 내용
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

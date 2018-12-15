import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster}/>
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/> )}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt={'movie poster'}/>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default Movie;

import React, {Component} from 'react';
import './App.css';
import Movie from "./movie/Movie";

class App extends Component {

  state = {};

  componentDidMount() {
    this._getMovies();
  };

  _renderMovies = () => {
    return this.state.movies.map((movie) => {
      return <Movie
        poster={movie.medium_cover_image}
        title={movie.title_english}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    });
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort by=download count")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {this.state.movies ? this._renderMovies() : 'Loading....'}
      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import './App.css';

class App extends React.Component {
  state = {
    //state
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    //함수

    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // console.log(movies);
    this.setState({ movies, isLoading: false });
    //this.setState 하는 거 : state의 movies갖고오기 때문
    // 이거 없으면 Loading... 넣으면 ready됨
  };

  componentDidMount() {
    this.getMovies(); //this.
  }

  render() {
    const { isLoading, movies } = this.state; //이부분 state
    return (
      // html처럼 보이지만 jsx이다.
      //class 대신 className
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>'Loading...'</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
      //return할때 {}
    );
  }
}
export default App;

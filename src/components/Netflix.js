import React from 'react';
import './api.css';
import loadable from '@loadable/component'

const Navbar = loadable(() => import('./Navbar'))
const MainMovie = loadable(() => import('./MainMovie'))
const MovieCard = loadable(() => import('./MovieCard'))
const NetflixOriginalsMovieCard = loadable(() => import('./NetflixOriginalsMovieCard'))

export default function Netflix(props) {
    return (
        <div>
        <Navbar />

        
        <MainMovie key={props.mainMovie.movieId} movieTitle={props.mainMovie.movieTitle} movieBackdrop={props.mainMovie.movieBackdrop} />
      <section className="netflixOrginalsSection">
        <h3 className="netflixOrginalsTitle">Netflix Originals</h3>
        <div className="netflixOrginalsMoviesAndTVShows">
          {props.netflixOriginal.map((movie) => {
            return <NetflixOriginalsMovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.moviePoster} />
          })}
        </div>
      </section>
      <section className="Section">
        <h3 className="Title">Trending Now</h3>
        <div className="MoviesAndTVShows">
          {props.netflixTrending.map((movie) => {
              return <MovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.movieBackdrop} />
            })}
        </div>
      </section>
      
      <section className="Section">
        <h3 className="Title">Comedies</h3>
        <div className="MoviesAndTVShows">
          {props.comedies.map((movie) => {
            return <MovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.movieBackdrop} />
          })}
        </div>
      </section>
      <section className="Section">
        <h3 className="Title">Dramas</h3>
        <div className="MoviesAndTVShows">
          {props.dramas.map((movie) => {
            return <MovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.movieBackdrop} />
          })}
        </div>
      </section>
      <section className="Section">
        <h3 className="Title">Mystery</h3>
        <div className="MoviesAndTVShows">
          {props.mysteries.map((movie) => {
            return <MovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.movieBackdrop} />
          })}
        </div>
      </section>
      <section className="Section">
        <h3 className="Title">TV Movies</h3>
        <div className="MoviesAndTVShows">
          {props.tvMovies.map((movie) => {
            return <MovieCard key={movie.movieId} movieTitle={movie.movieTitle} movieBackdrop={movie.movieBackdrop} />
          })}
        </div>
      </section>
        </div>
    )
}

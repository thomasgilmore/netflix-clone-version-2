import React, { useState, useEffect } from 'react';
import './api.css';
import axios from 'axios';
import Loading from './Loading';
import Navbar from './Navbar';
import MainMovie from './MainMovie';
import MovieCard from './MovieCard';

require('dotenv').config()

export default function API() {
    const [isLoading, setIsLoading] = useState(true);
    const [netflixTrending, setNetflixTrending] = useState([]);
    const [mainMovie, setMainMovie] = useState([]);
    const [netflixOriginal, setNetflixOriginal] = useState([]);
    const [comedies, setComedies] = useState([]);
    const [dramas, setDramas] = useState([]);
    const [adventures, setAdventures] = useState([]);
    const [tvMovies, setTVMovies] = useState([]);
    const [mysteries, setMysteries] = useState([]);

    const fetchData = () => {
        const netflixTrendingAPI = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + process.env.REACT_APP_MOVIE_DB_API;
        const netflixOriginalAPI = 'https://api.themoviedb.org/3/tv/popular?api_key=' + process.env.REACT_APP_MOVIE_DB_API;
        const comediesAPI = "https://api.themoviedb.org/3/movie/35/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const dramasAPI = "https://api.themoviedb.org/3/movie/18/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const adventuresAPI = "https://api.themoviedb.org/3/movie/12/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const tvMoviesAPI = "https://api.themoviedb.org/3/movie/10770/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const mysteriesAPI = "https://api.themoviedb.org/3/movie/9648/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";

        const getNetflixTrendingAPI = axios.get(netflixTrendingAPI);
        const getNetflixOriginalAPI = axios.get(netflixOriginalAPI);
        const getComediesAPI = axios.get(comediesAPI);
        const getDramasAPI = axios.get(dramasAPI);
        const getAdventuresAPI = axios.get(adventuresAPI);
        const getTVMoviesAPI = axios.get(tvMoviesAPI);
        const getMysteriesAPI = axios.get(mysteriesAPI);
        axios.all([getNetflixTrendingAPI, getNetflixOriginalAPI, getComediesAPI, getDramasAPI, getAdventuresAPI, getTVMoviesAPI, getMysteriesAPI]).then(
            axios.spread((...allData) => {
                const allDataNetflixTrending = allData[0].data.results;
                const allDataNetflixOriginal = allData[1].data.results;
                const allDataComedies = allData[2].data.results;
                const allDataDramas = allData[3].data.results;
                const allDataAdventures = allData[4].data.results;
                const allDataTVMovies = allData[5].data.results;
                const allDataMysteries = allData[6].data.results;

                console.log(allDataNetflixTrending);
                console.log(allDataNetflixOriginal);
                console.log(allDataComedies);
                console.log(allDataDramas);
                console.log(allDataAdventures);
                console.log(allDataTVMovies);
                console.log(allDataMysteries);
                
                
                
                for (var j = 0; j < 1; j++) {
                  console.log('working');
                  var movieTitle = allDataNetflixTrending[0].name || allDataNetflixTrending[0].title;
                  var movieBackdrop = "https://image.tmdb.org/t/p/original" + allDataNetflixTrending[0].backdrop_path;
                  var movieId = allDataNetflixTrending[0].id;
                  setMainMovie({ movieTitle, movieBackdrop, movieId })
                }
                
                setNetflixTrending(allDataNetflixTrending);
                setNetflixOriginal(allDataNetflixOriginal);
                setComedies(allDataComedies);
                setDramas(allDataDramas);
                setAdventures(allDataAdventures);
                setTVMovies(allDataTVMovies);
                setMysteries(allDataMysteries);
                setTimeout(function() {
                  setIsLoading(false);
                }, 500);
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
      <div>
        {isLoading ? null : <Navbar />}

        {isLoading ? 
          <Loading /> :
          <MainMovie key={mainMovie.movieId} movieTitle={mainMovie.movieTitle} movieBackdrop={mainMovie.movieBackdrop} />}
        <section className="netflixOrginalsSection">
          <h3 className="netflixOrginalsTitle">Netflix Orginals</h3>
          <div className="netflixOrginalsMoviesAndTVShows">

          </div>
        </section>
        <section className="Section">
          <h3 className="Title">Trending Now</h3>
          <div className="MoviesAndTVShows">

          </div>
        </section>
        
        <section className="Section">
          <h3 className="Title">Comedies</h3>
          <div className="MoviesAndTVShows">

          </div>
        </section>
        <section className="Section">
          <h3 className="Title">Dramas</h3>
          <div className="MoviesAndTVShows">

          </div>
        </section>
        <section className="Section">
          <h3 className="Title">Mystery</h3>
          <div className="MoviesAndTVShows">

          </div>
        </section>
        <section className="Section">
          <h3 className="Title">TV Movies</h3>
          <div className="MoviesAndTVShows">

          </div>
        </section>
  
      </div>
    )
}

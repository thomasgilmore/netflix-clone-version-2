import React, { useState, useEffect } from 'react';
import './api.css';
import axios from 'axios';
import Loading from './Loading';
// import Navbar from './Navbar';
// import MainMovie from './MainMovie';
// import MovieCard from './MovieCard';
import Netflix from './Netflix';

require('dotenv').config()

export default function API() {
    const [netflixTrending, setNetflixTrending] = useState([]);
    const [mainMovie, setMainMovie] = useState([]);
    const [netflixOriginal, setNetflixOriginal] = useState([]);
    const [comedies, setComedies] = useState([]);
    const [dramas, setDramas] = useState([]);
    const [tvMovies, setTVMovies] = useState([]);
    const [mysteries, setMysteries] = useState([]);

    const fetchData = () => {
        const netflixTrendingAPI = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + process.env.REACT_APP_MOVIE_DB_API;
        const netflixOriginalAPI = 'https://api.themoviedb.org/3/tv/popular?api_key=' + process.env.REACT_APP_MOVIE_DB_API;
        const comediesAPI = "https://api.themoviedb.org/3/movie/35/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const dramasAPI = "https://api.themoviedb.org/3/movie/18/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const tvMoviesAPI = "https://api.themoviedb.org/3/movie/10770/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";
        const mysteriesAPI = "https://api.themoviedb.org/3/movie/9648/similar?api_key=" + process.env.REACT_APP_MOVIE_DB_API + "&language=en-US&page=1";

        const getNetflixTrendingAPI = axios.get(netflixTrendingAPI);
        const getNetflixOriginalAPI = axios.get(netflixOriginalAPI);
        const getComediesAPI = axios.get(comediesAPI);
        const getDramasAPI = axios.get(dramasAPI);
        const getTVMoviesAPI = axios.get(tvMoviesAPI);
        const getMysteriesAPI = axios.get(mysteriesAPI);
        axios.all([getNetflixTrendingAPI, getNetflixOriginalAPI, getComediesAPI, getDramasAPI, getTVMoviesAPI, getMysteriesAPI]).then(
            axios.spread((...allData) => {
                const allDataNetflixTrending = allData[0].data.results;
                const allDataNetflixOriginal = allData[1].data.results;
                const allDataComedies = allData[2].data.results;
                const allDataDramas = allData[3].data.results;
                const allDataTVMovies = allData[4].data.results;
                const allDataMysteries = allData[5].data.results;

                console.log(allDataNetflixTrending);
                console.log(allDataNetflixOriginal);
                console.log(allDataComedies);
                console.log(allDataDramas);
                console.log(allDataTVMovies);
                console.log(allDataMysteries);
                
                
                
                for (let i = 0; i < 1; i++) {
                  let movieTitle = allDataNetflixTrending[i].name || allDataNetflixTrending[i].title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + allDataNetflixTrending[i].backdrop_path;
                  let movieId = allDataNetflixTrending[i].id;
                  setMainMovie({ movieTitle, movieBackdrop, movieId })
                }

                let NetflixTrending = [];

                for (let i = 1; i < allDataNetflixTrending.length; i++) {
                  let movieTitle = allDataNetflixTrending[i].name || allDataNetflixTrending[i].title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + allDataNetflixTrending[i].backdrop_path;
                  let movieId = allDataNetflixTrending[i].id;
                  NetflixTrending.push({ movieTitle, movieBackdrop, movieId });
                }
                
                let NetflixOriginal = [];

                allDataNetflixOriginal.forEach((movie) => {
                  let movieTitle = movie.name || movie.title;
                  let moviePoster = "https://image.tmdb.org/t/p/w440_and_h660_face" + movie.poster_path;
                  let movieId = movie.id;
                  NetflixOriginal.push({ movieTitle, moviePoster, movieId });
                })

                let NetflixComedies = [];

                allDataComedies.forEach((movie) => {
                  let movieTitle = movie.name || movie.title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
                  let movieId = movie.id;
                  NetflixComedies.push({ movieTitle, movieBackdrop, movieId });
                })

                let NetflixDramas = [];

                allDataDramas.forEach((movie) => {
                  let movieTitle = movie.name || movie.title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
                  let movieId = movie.id;
                  NetflixDramas.push({ movieTitle, movieBackdrop, movieId });
                })

                let NetflixTVMovies = [];

                allDataTVMovies.forEach((movie) => {
                  let movieTitle = movie.name || movie.title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
                  let movieId = movie.id;
                  NetflixTVMovies.push({ movieTitle, movieBackdrop, movieId });
                })
                
                let NetflixMysteries = [];

                allDataMysteries.forEach((movie) => {
                  let movieTitle = movie.name || movie.title;
                  let movieBackdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;
                  let movieId = movie.id;
                  NetflixMysteries.push({ movieTitle, movieBackdrop, movieId });
                })

                setNetflixTrending(NetflixTrending);
                setNetflixOriginal(NetflixOriginal);
                setComedies(NetflixComedies);
                setDramas(NetflixDramas);
                setTVMovies(NetflixTVMovies);
                setMysteries(NetflixMysteries);
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
      <div>
        {netflixTrending && netflixOriginal && mainMovie && comedies && dramas && tvMovies && mysteries ?
        <Netflix mainMovie={mainMovie} netflixOriginal={netflixOriginal}
        netflixTrending={netflixTrending} comedies={comedies}
        dramas={dramas} mysteries={mysteries}
        tvMovies={tvMovies} /> 
      : <Loading /> }
  
      </div>
    )
}

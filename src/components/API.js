import React, { useState, useEffect } from 'react';
import axios from 'axios';

require('dotenv').config()

export default function API() {
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
                const allDataNetflixTrending = allData[0].data;
                const allDataNetflixOriginal = allData[1].data;
                const allDataComedies = allData[2].data;
                const allDataDramas = allData[3].data;
                const allDataAdventures = allData[4].data;
                const allDataTVMovies = allData[5].data;
                const allDataMysteries = allData[6].data;

                console.log(allDataNetflixTrending);
                console.log(allDataNetflixOriginal);
                console.log(allDataComedies);
                console.log(allDataDramas);
                console.log(allDataAdventures);
                console.log(allDataTVMovies);
                console.log(allDataMysteries);
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            Test
        </div>
    )
}

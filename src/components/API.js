import React, { useState, useEffect } from 'react';
import axios from 'axios';

require('dotenv').config()

export default function API() {
    const [netflixTrending, setNetflixTrending] = useState([]);
    const [mainMovie, setMainMovie] = useState([]);
    const [netflixOriginal, setNetflixOriginal] = useState([]);

    const fetchData = () => {
        const netflixTrendingAPI = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + process.env.REACT_APP_MOVIE_DB_API;

        const getNetflixTrendingAPI = axios.get(netflixTrendingAPI)
        axios.all([getNetflixTrendingAPI]).then(
            axios.spread((...allData) => {
                const allDataNetflixTrending = allData[0].data

                console.log(allDataNetflixTrending);
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

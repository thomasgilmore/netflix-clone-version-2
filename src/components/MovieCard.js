import React from 'react';
import './moviecard.css';

export default function MovieCard(props) {
    return (
        <img src={props.movieBackdrop} alt="Movie or TV Show Poster" className="movieOrTVShowPoster" />
    )
}
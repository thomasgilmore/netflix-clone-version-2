import React from 'react';
import './moviecard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieCard(props) {
    return (
        <LazyLoadImage src={props.movieBackdrop} alt="Movie or TV Show Poster" className="movieOrTVShowPoster" />
    )
}
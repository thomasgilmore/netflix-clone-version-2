import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MovieCard(props) {
    return (
        <LazyLoadImage src={props.movieBackdrop} alt="Movie or TV Show Poster" className="movieOrTVShowPoster" width="250px" height="140.625px" />
    )
}
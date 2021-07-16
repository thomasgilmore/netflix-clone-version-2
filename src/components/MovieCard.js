import React from 'react';
import './moviecard.css';

class MovieCard extends React.Component {
    render() {
        return (
            <img src={this.props.movieBackdrop} alt="Movie or TV Show Poster" className="movieOrTVShowPoster" />
        )
    }
}

export default MovieCard
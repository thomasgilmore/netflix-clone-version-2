import React from 'react';
import './mainmovie.css';
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MainMovie(props) {
        return (
          <div className="imageContainer" width="100%" max-height="600px">
            <LazyLoadImage src={props.movieBackdrop} alt="Movie or TV Show Back Drop" className="mainMovie" width="100%" max-height="600px" />
            <div className="movieTitle"><h1>{props.movieTitle}</h1></div>
            <div className="buttonMain">
              <button className="btn btn-light playButton" type="button"><GrPlayFill className="playIcon" /><span className="playText"> Play</span></button>
              <button className="btn btn-light moreInfoButton" type="button"><AiOutlineInfoCircle className="infoIcon" /><span className="infoText"> More Info</span></button>
            </div>
          </div>
        )
    }
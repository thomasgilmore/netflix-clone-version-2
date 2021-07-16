import React from 'react';
import './mainmovie.css';
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function MainMovie(props) {
        return (
          <div className="imageContainer">
            <img src={props.movieBackdrop} alt="Movie or TV Show Back Drop" className="mainMovie" />
            <div className="movieTitle"><h1>{props.movieTitle}</h1></div>
            <div className="buttonMain">
              <button className="btn btn-light playButton" type="button"><GrPlayFill className="playIcon" /><span className="playText"> Play</span></button>
              <button className="btn btn-light moreInfoButton" type="button"><AiOutlineInfoCircle className="infoIcon" /><span className="infoText"> More Info</span></button>
            </div>
          </div>
        )
    }
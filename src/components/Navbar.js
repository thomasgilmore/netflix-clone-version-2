import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AiOutlineGift } from "react-icons/ai";
import { BsFillBellFill } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import NetflixLogo from "../img/580b57fcd9996e24bc43c529.png";
import NetflixAvatar from "../img/Netflix-avatar.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" id="home">
            <img
              src={NetflixLogo}
              className="netflixLogo"
              alt="Netflix Logo - https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink" href="#home">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink" href="#home">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink" href="#home">
                  New & Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLink" href="#home">
                  My List
                </a>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link search navLink2" href="#home">
                    <CgSearch size={25} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link dvd navLink2" href="#home">
                    DVD
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navLink2" href="#home">
                    <AiOutlineGift size={27} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navLink2" href="#home">
                    <BsFillBellFill size={24} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navLink2" href="#home">
                    <img
                      src={NetflixAvatar}
                      className="profileImage"
                      alt="Profile - https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

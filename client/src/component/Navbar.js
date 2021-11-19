import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
const Navbar1 = () => {
    return (
        <>
  
       
      <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand mr-0" href="#">
        <img src="./images/spectra/spectra_logo-02.png" 
        // style="height: 5rem;"
         alt="" />
      </a>
      <a class="navbar-brand mx-auto" href="#">
        <img src="./images/logo.png" 
        // style="height: 4rem;"
        alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon text-white"
          ><i class="fas fa-bars"></i
        ></span>
      </button>

      <div
        class="collapse navbar-collapse"
        // style="flex-grow: 0;margin-top:-0.5rem"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          {/* <li class="nav-item active"> */}
            {/* <!-- <a class="nav-link" href="https://eclipseacmthapar.me/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li> --> */}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Events
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <!-- <a
                class="dropdown-item "
                href="https://wiredclan.com/flamingo"
                target="_blank"
                rel="noopener noreferrer"
                >Flamingo</a
              > --> */}
              <a
                class="dropdown-item "
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >SpiritHack</a
              >
              <a
                class="dropdown-item "
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                >CodeFeud</a
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Rulebooks
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <!-- <a
                class="dropdown-item"
                href="https://drive.google.com/file/d/1bDV3HP8xTauKPYWCbrh2sRtHoMUojEOa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >Flamingo</a
              > --> */}
              <a
                class="dropdown-item "
                href="https://drive.google.com/file/d/1rwsSj96Jn2icLmGYXtcvbxHtzLiHe4xn/view"
                target="_blank"
                rel="noopener noreferrer"
                >SpiritHack</a
              >
              <a
                class="dropdown-item "
                href="https://drive.google.com/file/d/15eZXJtR2cq0FqVJccBvQfqEUVgGF1bdH/view"
                target="_blank"
                rel="noopener noreferrer"
                >CodeFeud</a
              >
            </div>
          </li>
          {/* <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item " href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> --> */}
          <li class="nav-item">
            <a
              href="https://forms.gle/BtGcMYTojQ9abH2GA"
              target="_blank"
              rel="noopener noreferrer"
              class="boxed-btn3  mx-md-3  wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".7s"
              >Register</a>
          </li>
          <li>
            <div 
	            class="apply-button dev-nav" 
	            data-hackathon-slug="spirit-hack" 
	            data-button-theme="light"
	            // style="height: 44px; width: 312px"
          ></div>
          </li>
        </ul>
      </div>
    </nav>
</>
    )
}

export default Navbar1

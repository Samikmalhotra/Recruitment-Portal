import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Button from '@mui/material/Button';
import bgwpm from '../videos/bg.webm'
import bgogg from '../videos/bg.ogv'
import bgmp4 from '../videos/bg.mp4'
import VideoPlayer from 'react-background-video-player'



export default function Homepage() {
  return (
    <div>
      <Navbar/>
      {/* Welcome to the ACM Recruitments Portal */}
      <div id="pattern"></div>
    <div class="shadow_corner" id="top_left"></div>
    <div class="shadow_corner" id="top_right"></div>
    <div class="shadow_corner" id="bottom_left"></div>
    <div class="shadow_corner" id="bottom_right"></div>
    <div id="container">
      <div class="overlay"></div>
      <div class="item-title">
        <div id="message"></div>
        <div class="link-bottom animated fadeInDown">
          <div class="link-bottom">
            <a
              class="link-icon"
              rel="noopener noreferrer"
              href="https://www.facebook.com/acmthapar/"
              target="_blank"
              ><i class="link-icon fa fa-facebook" aria-hidden="true"></i
            ></a>
            <a
              class="link-icon"
              rel="noopener noreferrer"
              href="https://twitter.com/AcmThapar"
              target="_blank"
              ><i class="link-icon fa fa-twitter" aria-hidden="true"></i
            ></a>
            <a
              class="link-icon"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/thapar-acm-student-chapter/"
              target="_blank"
              ><i class="link-icon fa fa-linkedin" aria-hidden="true"></i
            ></a>
            <a
              class="link-icon"
              rel="noopener noreferrer"
              href="https://github.com/ACM-Thapar"
              target="_blank"
              ><i class="link-icon fa fa-github" aria-hidden="true"></i
            ></a>
            <a
              class="link-icon"
              rel="noopener noreferrer"
              href="https://www.instagram.com/acmthapar/?igshid=1r2k6z9w5926o"
              target="_blank"
              ><i class="link-icon fa fa-instagram" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="fullscreen-bg">
    <VideoPlayer
        className="video"
        src={bgwpm}
        autoPlay={true}
        muted={true}
        disableBackgroundCover = {false}

      />
      {/* <video playsinline autoplay muted loop poster="video/7/bg.jpg" id="bgvid">
        <source src={bgwpm} type="video/webm" />
        <source src={bgmp4} type="video/mp4" />
        <source src={bgogg} type="video/ogg" />
      </video> */}
    </div>

    <div class="loadingIcon">
      <svg class="loading-icon" id="loading-circle" viewBox="0 0 18 18">
        <circle
          class="circle"
          opacity=".1"
          stroke="#fff"
          stroke-width="2"
          stroke-miterlimit="10"
          cx="9"
          cy="9"
          r="8"
          fill="none"
        ></circle>
        <circle
          class="dash"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-dasharray="1,100"
          cx="9"
          cy="9"
          r="8"
          fill="none"
        ></circle>
      </svg>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg"
    //  style="display:none"
     >
      <symbol id="close" viewBox="0 0 30 30">
        <path
          d="M15 0c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm5.7 19.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-4.3-4.3-4.3 4.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l4.3-4.3-4.3-4.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.3 4.3 4.3-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-4.3 4.3 4.3 4.3z"
        />
      </symbol>
    </svg>

    <section className="margin-top-720"
    // style="margin-top: 720px;"
    >
      <div class="performar_area black_bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="section_title text-center mb-80">
                <h3
                  class="wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  About Event
                </h3>
                <p
                  class="wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  “Do not go gentle into that good night. Rage, rage against the
                  dying of the light.” Do you choose to fight or perish? Are you
                  willing to do whatever it takes to save your existence? Join
                  us on this enthralling journey of survival from 19th March.
                </p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="about_thumb">
                <div
                  class="thumb_inner  wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <img
                    src="images/logo.png"
                    alt=""
                    data-pagespeed-url-hash="1232733362"
                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="about_info pl-68">
                <p
                  class=" wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  Flex your coding skills and brainstorm like never before to
                  come up with innovative solutions to some of the most
                  pertinent problems plaguing us. Whether you've just started
                  your journey or are a seasoned veteran, we welcome all to this
                  enthralling event set in the backdrop of a thrilling science
                  fiction tale hundreds of years into the future!
                </p>
                <a
                  href="https://forms.gle/BtGcMYTojQ9abH2GA"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="boxed-btn3 mx-3  wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".7s"
                  >Register</a
                >
                <a
                  href="https://discord.gg/MweUGkDVZD"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="boxed-btn3  wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".7s"
                  >Join Discord</a
                >
                <div className="pos-abs"
                // style="position: absolute; margin: 3.5%;"
                >
                  <div 
                  class="apply-button devfolio-btn" 
                  data-hackathon-slug="spirit-hack" 
                  data-button-theme="light"
                  // style="height: 44px; width: 312px; margin: 15px;"
                  ></div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <Link to="/quizDetails">
        <Button variant="contained">Take Me to Quiz</Button>
      </Link>
    </div>
  )
}

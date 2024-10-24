import React from 'react'

const Carousel = () => {
  return (
    <div className="carousel">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="./media/bannerVideo.c996c1c7a24a1610a468.png"
        className="carousel-video"
      >
        <source src="./media/VIETNAM - My Home - Masew, MyoMouse, Nguyen Loi.aeb6fbce54ecf85640df.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="container carousel-content">
        <h1><img src="./image/airbnb-logo.svg" alt="" width={50} /> airbnb</h1>
        <p>Belong anywhere</p>
      </div>
      <div className='carousel-bottom'>
        <img src="./image/swoosh-hero.png" alt="" />
      </div>
    </div>
  )
}

export default Carousel
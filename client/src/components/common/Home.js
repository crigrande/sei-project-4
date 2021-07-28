import React from 'react'

const Home = () => {
  
  return (
    <div className="width: 100%">
      <div className="row align-items-center" id="containercarousel">
        <div className="col-sm-12 col-md-6">
          <div className="container-fluid">
            <h1 className="align-items-center text-center blockquote mb-0">Find your space with Workspace!</h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="container" id="containercarouselright">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/v1627476595/project%204/Home%20-carousel/image-from-rawpixel-id-2521482-original_mgmfcd.jpg'} className=" d-block w-100" alt="stories"/>
                  <div className="carousel-caption d-none d-md-block" id="corousetext">
                    <h5>Something</h5>
                    <p>Something!</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/c_scale,w_1200/v1627467529/project%204/Home%20-carousel/image-from-rawpixel-id-437390-jpeg_jlpdja.jpg'} className=" d-block w-100" alt="stories"/>
                  <div className="carousel-caption d-none d-md-block" id="corousetext">
                    <h5>Something</h5>
                    <p>Something!</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src= {'http://res.cloudinary.com/dbc3fejob/image/upload/c_scale,w_1200/v1627467492/project%204/Home%20-carousel/image-from-rawpixel-id-400551-jpeg_je1ox3.jpg'} className=" d-block w-100" alt="stories"/>
                  <div className="carousel-caption d-none d-md-block" id="corousetext">
                    <h5>Something</h5>
                    <p>Something!</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
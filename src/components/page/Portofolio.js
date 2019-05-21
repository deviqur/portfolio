import React from 'react';
import MyCard from '../MyCard';


class Portofolio extends React.Component{
    render(){
        return(
            <div>
                <section className="about-banner">
                  <div className="container">				
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="about-content col-lg-12">
                        <h1 className="text-white">
                          Portfolio				
                        </h1>	
                        <p className="text-white link-nav"><a href="index.html" aria-label="home">Home </a>  <span className="lnr lnr-arrow-right" />  <a href="portfolio.html"> Portfolio</a></p>
                      </div>	
                    </div>
                  </div>
                </section>
                <section className="portfolio-area section-gap" id="portfolio">
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="menu-content pb-70 col-lg-8">
                        <div className="title text-center">
                          <h1 className="mb-10">Our Latest Featured Projects</h1>
                          <p>Who are in extremely love with eco friendly system.</p>
                        </div>
                      </div>
                    </div>
                    <div className="filters">
                      <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".vector">Vector</li>
                        <li data-filter=".raster">Raster</li>
                        <li data-filter=".ui">UI/UX</li>
                        <li data-filter=".printing">Printing</li>
                      </ul>
                    </div>
                    <div className="filters-content">
                      <div className="row grid" style={{position: 'relative', height: '863.906px'}}>
                        <div className="single-portfolio col-sm-4 all vector" style={{position: 'absolute', left: '0%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/p1.jpg" alt=""/>
                            </div>
                            <a href="img/p1.jpg" className="img-pop-up" aria-label="2D Vinyl Design">	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                              </div>
                            </a>                              		
                          </div>
                          <div className="p-inner">
                            <h4>2D Vinyl Design</h4>
                            <div className="cat">vector</div>
                          </div>					                               
                        </div>
                        <div className="single-portfolio col-sm-4 all raster" style={{position: 'absolute', left: '33.2456%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/p2.jpg" alt="vector"/>
                            </div>
                            <a href="img/p2.jpg" className="img-pop-up" aria-label="Design">	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                              </div>
                            </a>                              		
                          </div>
                          <div className="p-inner">
                            <h4>2D Vinyl Design</h4>
                            <div className="cat">vector</div>
                          </div>					                               
                        </div>                            
                        <div className="single-portfolio col-sm-4 all ui" style={{position: 'absolute', left: '66.5789%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/p3.jpg" alt="design"/>
                            </div>
                            <a href="img/p3.jpg" className="img-pop-up" name="design" >	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="preview" /></div>
                              </div>
                            </a> 
                          </div>
                          <div className="p-inner">
                            <h4>Creative Poster Design</h4>
                            <div className="cat">Agency</div>
                          </div>
                        </div>
                   
                    
                        
                      </div>
                    </div>
                  </div>
                </section>
            </div>
            
        )
    }
}

export default Portofolio;
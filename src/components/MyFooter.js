import React from 'react';
import {NavLink} from 'react-router-dom';

class MyAppBar extends React.Component{
  render(){
      return(
          <div>
              {/* start footer Area */}
                <footer className="footer-area section-gap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                          <h4>About Me</h4>
                          <p>
                            We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                          </p>
                          <p className="footer-text">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by Devi
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                          <h4>Newsletter</h4>
                          <p>Stay updated with our latest trends</p>
                          <div className id="mc_embed_signup">
                            <form target="_blank" action="#" method="get">
                              <div className="input-group">
                                <input label ="email" type="text" className="form-control" name="email" placeholder="Enter Email Address"  />
                                <div className="input-group-btn">
                                  <button className="btn btn-default" type="submit" aria-label="submit">
                                    <span className="lnr lnr-arrow-right" />
                                  </button>    
                                </div>
                                <div className="info" />  
                              </div>
                            </form> 
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div className="single-footer-widget">
                          <h4>Follow Me</h4>
                          <p>Let us be social</p>
                          <div className="footer-social d-flex align-items-center">
                            <a href="#" aria-label="facebook"><i className="fa fa-facebook" /></a>
                            <a href="#" aria-label="twitter"><i className="fa fa-twitter" /></a>
                            <a href="#" aria-label="dribble"><i className="fa fa-dribbble" /></a>
                            <a href="#" aria-label="behance"><i className="fa fa-behance" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
                {/* End footer Area */}
          </div>
      )
  }
}

export default MyAppBar;
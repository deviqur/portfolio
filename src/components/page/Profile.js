import React, {Component} from 'react';

class Profile extends React.Component{
    render(){
        return(
            <div> 
              <section className="home-about-area section-gap">
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 home-about-left">
                      <img className="img-fluid" src="img/me.png" alt="drawing" />
                    </div>
                    <div className="col-lg-5 col-md-6 home-about-right">
                      <h6>About Me</h6>
                      <h1 className="text-uppercase">Personal Details</h1>
                      <p>
                      I am Devi Qurnia Sari, i was born in Lampung, 10 December 1998. Now i am student of Computer Science and Information System in Universitas Gadjah Mada science 2017 . I come from Tangerang. I studied at SDN Poris Plawad 3, SMPN 7 Tangerang, and SMKN 3 Tangerang.
                      </p>
                      <a href="#" className="primary-btn text-uppercase" name="view of detail">View Full Details</a>
                    </div>
                    <div className="col-lg-12 pt-60">
                      <p>
                        It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights so far as its popularity and technological advancement are concerned. The history of video game is as interesting as a fairy tale. 
                      </p>
                      <p>
                        The quality of today’s video game was not at all there when video game first conceptualized and played ever. During the formulative years, video games were created by using various interactive electronic devices with various display formats. The first ever video game was designed in 1947 by Thomas T. Goldsmith Jr. 								
                      </p>
                      <h4 className="pt-30">Tools Expertness</h4>	
                    </div>
                  </div>
                  <div className="row skillbar-wraps">					
                    <div className="col-lg-6 skill-left">
                      <div className="single-skill">
                        <p>
                          After Effects 85%
                        </p>
                        <div className="skill sb_progress" data-width={85} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '85%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                      <div className="single-skill">
                        <p>
                          Photoshop 90%
                        </p>
                        <div className="skill sb_progress" data-width={90} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '90%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                      <div className="single-skill">
                        <p>
                          Illustrator 70%
                        </p>
                        <div className="skill sb_progress" data-width={70} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '70%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>																				
                    </div>
                    <div className="col-lg-6 skill-right">
                      <div className="single-skill">
                        <p>
                          Sublime 95%
                        </p>
                        <div className="skill sb_progress" data-width={95} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '95%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>								
                      <div className="single-skill">
                        <p>
                          Sketch 85%
                        </p>
                        <div className="skill sb_progress" data-width={85} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '85%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                    </div>
                  </div>
                </div>	
              </section>
            </div>
        )
    }
}

export default Profile;
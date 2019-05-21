import React from 'react'
import {NavLink} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
              {/* start Home Area */}
              <section className="banner-area">
                  <div className="container">
                    <div className="row fullscreen align-items-center justify-content-between">
                      <div className="col-lg-6 col-md-6 banner-left">
                        <h6>Hello I am</h6>
                        <h1>Devi Qurnia Sari</h1>
                        <p>
                        I am a backend developer, I like to eat and travel. let's know me.
                        </p>
                        <button href="/" class="primary-btn text-uppercase" type="submit" name="profil"><NavLink activeClassName="current" to='/profile'>Profile</NavLink></button>
                        
                      </div>
                      <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
                        {/* <img className="img-fluid" src="img/devi.png" alt="me"/> */}
                      </div>
                    </div>
                  </div>					
                </section>
                {/* end Home Area */}
               
            </div>
        )
    }
}

export default Home;
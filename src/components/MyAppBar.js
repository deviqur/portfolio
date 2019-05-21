import React from 'react';
import {NavLink} from 'react-router-dom';

class MyAppBar extends React.Component{
  render(){
      return(
          <div>
            <header id="header">
              <div className="container main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                  </div>
                  <nav id="nav-menu-container">
                    <ul className="nav-menu">
                      <li>
                        <a className="nav-menu" href="/"><NavLink activeClassName="current" to='/home'>Home</NavLink></a>
                      </li>
                      <li> 
                        <a className="nav-menu" href="/"><NavLink activeClassName="current" to='/profile'>Profile</NavLink></a>
                      </li>
                      <li>
                        <a className="nav-menu" href="/"><NavLink activeClassName="current" to='/portofolio'>Portfolio</NavLink></a>
                      </li>
                      <li>
                        <a className="nav-menu" href="/"><NavLink activeClassName="current" to='/services'>Services</NavLink></a>
                      </li>
                      <li>
                        <a className="nav-menu" href="/"><NavLink activeClassName="current" to='/contact'>Contact</NavLink></a>
                      </li>
                    </ul>
                  </nav>{/* #nav-menu-container */}		    		
                </div>
              </div>
            </header>{/* #header */}
          </div>
      )
  }
}

export default MyAppBar;
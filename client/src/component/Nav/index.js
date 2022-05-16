import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import "../../assets/styles/nav.css";

function Nav(props) {
  const [state] = useStoreContext();
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  function showNavigation() {
   
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
          <div className="container">
            <div className="navbar-header">
              
              <a className="navbar-brand page-scroll" href="/">
                Risk Rating Tool
              </a>{" "}
            </div>
            <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
         <div className={click ? 'nav-menu active' : 'nav-menu'}>
              <ul className=" navbar-nav navbar-right ">
                <li>
                <Link to='/'  onClick={closeMobileMenu}>
                    Home
                  <i className='fab fa-firstdraft' /></Link>
                  
                </li>
                <li >
                  <a onClick={closeMobileMenu} href="/impact">Impact</a>
                </li>

                <li>
                  <Link onClick={closeMobileMenu} to="/likelyhood">Likelyhood</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/inherent-risk">Inherent Risk</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/mitigating-controls">Mitigating Controls</Link>
                </li>
                <li>
                  <Link onClick={closeMobileMenu} to="/residual-risk">Residual Risk</Link>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
      );
    
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">-Shop Shine</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

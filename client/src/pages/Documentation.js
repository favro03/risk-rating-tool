import React from "react";
import { Link } from "react-router-dom";

const Documentation = (props) => {
    return (
      <header id='home'>
        <div className='intro'>

          <div className='row'>  
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/access">Access</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/create-findings">How to Create a Finding</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/risk-accept">Risk Accept</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/rating-tool">Risk Rating Tool</Link>
              </button>
            </div>
            
          </div>
          <div className='row'>  
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/riskLandscape">Risk Landscape</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
                <Link  to="/">TBD</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
          </div>

          <div className='row'>  
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
            <div className="column" >
              <button className='btn-doc'>
              <Link  to="/">TBD</Link>
              </button>
            </div>
          </div>
          
           
        </div>
      </header>
    )
  }
   
  export default Documentation;
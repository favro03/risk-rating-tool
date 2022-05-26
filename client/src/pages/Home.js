import React from "react";
import { Link } from "react-router-dom";
import access from "../assets/images/access.jpg";
import finding from "../assets/images/findings.png";
import riskAccept from "../assets/images/risk-accept.png";
import tool from "../assets/images/tool.png";


const Home = (props) => {
    return (
      <header id='home'>
        <div className='intro'>
          <div className='row'>  
            <div className="column" >
              <img src={access}    alt="Access" />
              <button className='btn-home'>
                <Link  to="/access">Access</Link>
              </button>
            </div>
            <div className="column" >
              <img src={finding} className="img-responsive" alt="Finding" />
              <button className='btn-home'>
                <Link  to="/create-findings">How to Create a Finding</Link>
              </button>
            </div>
            <div className="column" >
              <img src={riskAccept} className="img-responsive" alt="Finding" />
              <button className='btn-home'>
                <Link  to="/risk-accept">Risk Accept</Link>
              </button>
            </div>
            <div className="column" >
              <img src={tool} className="img-responsive" alt="Finding" />
              <button className='btn-home'>
                <Link  to="/rating-tool">Risk Rating Tool</Link>
              </button>
            </div>
          </div>
              
           
        </div>
      </header>
    )
  }
   
  export default Home;
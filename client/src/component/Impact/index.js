import React from "react";
import { Link } from "react-router-dom";


const Impact = () => {
    return (
      <header id='home'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-5 intro-text'>
                 
                    <Link className='btn btn-custom btn-lg page-scroll' to="/shop">
                        Critical:; Is the violation of policy going to stop target from selling socks?
                    </Link>
                    <Link className='btn btn-custom btn-lg page-scroll' to="/shop">
                        High: This issue will have a high impact to Target
                    </Link>
                    <Link className='btn btn-custom btn-lg page-scroll' to="/shop">
                        Medium: This will have medium impact to Target
                    </Link>
                    <Link className='btn btn-custom btn-lg page-scroll' to="/shop">
                       Low: Is this a local issue that would not have an impact on production?
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
   
  export default Impact;
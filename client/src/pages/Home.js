import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
    return (
      <header id='home'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-5 intro-text'>
                  <h1>
                    Risk Rating Tool
                  </h1>
                  <p>This tool should help you determine how to risk rank the issue you found.</p>
                  <p>First Question, is this a violoation of policy?  If yes lets continue.</p>
                    Placeholder for image of risk ratging process
                    <Link className='btn btn-custom btn-lg page-scroll' to="/impact">
                        Start
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
   
  export default Home;
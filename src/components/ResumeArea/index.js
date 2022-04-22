import React from "react";
import Resume from '../../assets/pdf/CodingResume.pdf'

const ResumeArea = function() {

    return(
<section className="hero is-info is-bold is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <h1 className="titleItem">
              This is my adventure log.
          </h1>
          <br/>
                <a className='titleItem has-text-primary' href="/">Return to The King's Gamble</a>
        </div>
        <div className="column">
          <embed src={Resume} type="application/pdf" width="100%" height='800px'></embed>
        </div>
      </div>
    </div>
  </div>
</section>
  )
};

export default ResumeArea
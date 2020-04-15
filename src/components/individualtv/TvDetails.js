import React from 'react'

const TvDetails = ({value}) => {
  let imgurl = `https://image.tmdb.org/t/p/original${value.pp}`
  return (
    <React.Fragment>
      <section className="tv-image-banner">
        
        <div className="container">
          <div className="tv-details-left">
            <img className="tv-details-img" src={imgurl} alt="" />
            
          </div>
          <div className="tv-details-right">
          
            <ul className="tv-details-list">
              <li className="tv-details-li">Status<span className="tv-details-entry">{value.status}</span></li>
              <li className="tv-details-li">Rating<span className="tv-details-entry">{value.vote}</span></li>
              <li className="tv-details-li">Created by:<span className="tv-details-entry">{value.cb}</span></li>
              <li className="tv-details-li">Production <br />Companies<span className="tv-details-entry">{value.pc}</span></li>
              <li className="tv-details-li">Genre<span className="tv-details-entry">{value.genre}</span></li>
              <li className="tv-details-li">Episode <br />Runtime<span className="tv-details-entry">{value.ert}mins</span></li>
              <li className="tv-details-li">First Air <br />Date<span className="tv-details-entry">{value.fad}</span></li>
              <li className="tv-details-li">Networks<span className="tv-details-entry">{value.ntw}</span></li>
            </ul>
          </div>
        </div>
        
      </section>
    </React.Fragment>
  )
}

export default TvDetails
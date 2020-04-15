import React from 'react'

const CelebrityDetails = ({value}) => {
  
  let path = value.pp;
  let imgurl = `https://image.tmdb.org/t/p/original${path}`
  return (
    <React.Fragment>
      <section className="people-image-banner">
        
        <div className="container">
          <div className="p-details-left">
            <img className="p-details-img" src={imgurl} alt="" />
            
          </div>
          <div className="p-details-right">
          
            <ul className="p-movie-details-list">
              <li className="p-movie-details-li">Name<span className="p-movie-details-entry">{value.nam}</span></li>
              <li className="p-movie-details-li">Birthday<span className="p-movie-details-entry">{value.bd}</span></li>
              <li className="p-movie-details-li">known for<span className="p-movie-details-entry">{value.kd}</span></li>
              <li className="p-movie-details-li">Place of Birth<span className="p-movie-details-entry">{value.pb}</span></li>
            </ul>  
            
          </div>
        </div>
        
      </section>
    </React.Fragment>
  )
}

export default CelebrityDetails
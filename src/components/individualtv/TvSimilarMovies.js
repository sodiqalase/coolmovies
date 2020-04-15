import React from 'react'
import TvSimilarCard from './TvSimilarCard'
import { Link } from 'react-router-dom'

const TvSimilarMovies = ({value}) => {
  let show = value.map((each, index) => {
    return <TvSimilarCard key={index} value={each} />
  })
  return (
    <React.Fragment>
      <section className="tv-wrapper">
        <div className="tv-overlay">
          <section className="tv-ind-cat">
            <div className="tv-header">
              <h4 className="tv-title">Similar Tv Shows</h4>
            </div>
            <div className="tv-collection">
              <div className="tv-container">
                {show}
              </div>    
            </div>    
          </section>      
        </div>
      </section> 
  
      <div className="tv-button-wrapper">
        
        <Link to="/" className="tv-pb-2">Return</Link>
      </div>
    </React.Fragment>
  )
}

export default TvSimilarMovies
import React from 'react'
import SimilarCard from './SimilarCard'
import { Link } from 'react-router-dom'


const SimilarMovies = ({value}) => {
  let res = value.map((each, index) => {
    return <SimilarCard key={index} value={each} />
  })
  return (
    <React.Fragment>
      {value.length === 0? '' :
      <section className="similar-wrapper">
        <div className="similar-overlay">
          <section className="similar-ind-cat">
            <div className="similar-header">
              <h4 className="similar-title">Similar Movies</h4>
              
            </div>
            <div className="similar-collection">
              <div className="similar-container">
                {res}
              </div>    
            </div>    
          </section>      
        </div>
      </section>          
      }
      <div className="plot-button-wrapper">
        
        <Link to="/" className="pb-2">Return</Link>
      </div>
    </React.Fragment>
  )
}

export default SimilarMovies
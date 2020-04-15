import React from 'react'

const MovieDetails = ({value}) => {
  let rev = value.revenue == 0? 'Not Available' : value.revenue + '$';
  let bud = value.budget == 0? 'Not Available' : value.budget + '$';
  let imgurl = `https://image.tmdb.org/t/p/original${value.pp}`
  return (
    <React.Fragment>
      <section className="movie-image-banner">
        <div className="container">
          <div className="details-left">
            <img className="details-img" src={imgurl} alt="" />
            
          </div>
          <div className="details-right">
          
            <ul className="movie-details-list">
              <li className="movie-details-li">Status<span className="movie-details-entry">{value.status}</span></li>
              <li className="movie-details-li">Release Date<span className="movie-details-entry">{value.release_date}</span></li>
              <li className="movie-details-li">Runtime<span className="movie-details-entry">{value.runtime} minutes</span></li>
              <li className="movie-details-li">Tagline<span className="movie-details-entry">{value.tagline}</span></li>
              <li className="movie-details-li">Revenue<span className="movie-details-entry">{rev}</span></li>
              <li className="movie-details-li">Genre<span className="movie-details-entry">{value.genre}</span></li>
              <li className="movie-details-li">Production<br /> Companies<span className="movie-details-entry">{value.pc}</span></li>
              <li className="movie-details-li">Budget<span className="movie-details-entry">{bud}</span></li>
            </ul>
          </div>
        </div>
        
      </section>
    </React.Fragment>
  )
}

export default MovieDetails
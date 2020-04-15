import React from 'react'
// import { Link } from 'react-router-dom'

const SimilarCard = ({value}) => {
  let direction = `/movie/${value.id}`;
  let path = value.poster_path || value.profile_path;
  let imgurl = `https://image.tmdb.org/t/p/w500${path}`
  return (
    <React.Fragment>
      <a href={direction} className="similar-result">
        <div className="s-img-container">
          <img src={imgurl} alt="" className="s-result-img" />
        </div> 
        <div className="s-result-name">{value.title || value.name}</div>
      </a>
    </React.Fragment>
  )
}

export default SimilarCard
import React from 'react'

const TvSimilarCard = ({value}) => {
  let path = value.poster_path;
  let direction = `/tv/${value.id}`
  let imgurl = `https://image.tmdb.org/t/p/original${path}`
  return (
    <React.Fragment>
      <a href={direction} className="tv-result">
        <div className="tv-img-container">
          <img src={imgurl} alt="" className="tv-result-img" />
        </div> 
        <div className="tv-result-name">{value.name}</div>
      </a>
    </React.Fragment>
  )
}

export default TvSimilarCard
import React from 'react'

const TvCastCard = ({value}) => {
  let path = value.profile_path;
  let imgurl = `https://image.tmdb.org/t/p/original${path}`
  return (
    <React.Fragment>
      <div className="tv-cast-each">
        <div className="tv-cast-img-cnt">
          <img src={imgurl} alt="" className="tv-cast-img" />
        </div>
        <p className="tv-cast-name">{value.name}</p>
        
      </div>
    </React.Fragment>
  )
}

export default TvCastCard
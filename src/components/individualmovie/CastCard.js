import React from 'react'

const CastCard = ({value}) => {
  let imgurl = `https://image.tmdb.org/t/p/w500${value.profile_path || value.poster_path}`;
  return (
    <React.Fragment>
      <div className="cast-each">
        <div className="cast-img-cnt">
          <img src={imgurl}alt="" className="cast-img" />
        </div>
        <p className="cast-name">{value.name || value.title}</p>
      </div>
    </React.Fragment>
  )
}

export default CastCard
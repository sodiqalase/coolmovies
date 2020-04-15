import React from 'react'

const FeaturedCards = ({value, index}) => {
  let path = value.poster_path || value.profile_path;
  let imgurl = `https://image.tmdb.org/t/p/w500${path}`
  
  return (
    <React.Fragment>
      <div  className="people-result">
        <div className="p-img-container">
          <img src={imgurl} alt="" className="p-result-img" />
        </div> 
        
      </div>
    </React.Fragment>
  )
}

export default FeaturedCards
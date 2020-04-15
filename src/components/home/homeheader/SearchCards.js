import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const SearchCards = ({values}) => {
  let url = 'https://image.tmdb.org/t/p/w500';
  let path = values.pp;
  let imgurl = url + path;
  
  let direction;
  if (values.mtd === 'movies'){
    direction = `/movie/${values.id}`
  } else if (values.mtd === 'shows'){
    direction = `/tv/${values.id}`
  } else if (values.mtd === 'celebrity'){
    direction = `/celebrity/${values.id}`
  }
  
  
  
   
  return (
    <React.Fragment>
      <Link to={direction} className="sr-result-each">
        <div className="sr-img-container">
          <img src={imgurl} alt="" className="sr-result-img" />
          {values.rating ? <Rating value={values.rating2} /> : ''}
        </div>
        <div className="sr-result-name">{values.name}</div>
      </Link>
    </React.Fragment>
  )
}

export default SearchCards
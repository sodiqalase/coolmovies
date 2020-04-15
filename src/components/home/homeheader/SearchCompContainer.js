import React from 'react'
import SearchCards from './SearchCards'

const SearchCompContainer = ({values}) => {
  
  let paint = values.results.map((each, index) => {
    return <SearchCards key={index}  values={{name: each.name || each.title, rating2: each.vote_average, mtd: values.method, pp : each.poster_path || each.profile_path, rating: values.rating, id: each.id }} />
  })
  console.log(values, paint)
  return (
    <React.Fragment>
      <section className="search-result">
        <div className="search-result-overlay">
          <div className="container">
            <h4 className="search-header">Search Results</h4>
            <div className="underline"></div>
            <div className="search-result-wrapper">
              {paint}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SearchCompContainer
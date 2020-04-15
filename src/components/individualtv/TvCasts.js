import React from 'react'
import TvCastCard from './TvCastCard'

const Header = ({value}) => {
  let show = value.map((each,index) => {
    return <TvCastCard key={index} value={each} />
  })
  return (
    <React.Fragment>
      <section className="tv-cast">
        <div className="container">
          <h4 className="tv-cast-header">Casts</h4>
          <div className="underline"></div>
          <div className="tv-cast-wrapper">
            {show}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Header
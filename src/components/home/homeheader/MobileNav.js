import React from 'react'
import { Link } from 'react-router-dom'


const MobileNav = ({values}) => {
  const translate = values.nav ? 'translateX(0%)' : 'translateX(150%)';
  
  return (
    <React.Fragment>
      <section className="mobile-nav" style={{transform: translate}}>
   
        <div className="mobile-nav-inner">
          <button onClick={values.func} className="close"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="window-close" className="svg-inline--fa fa-window-close fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z"></path></svg></button>
          <div className="nav-header">Explore Categories </div>
          <div className="nav-body">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/more/1" className="nav-link">Trending Movies</Link></li>
              <li className="nav-item"><Link to="/more/2" className="nav-link">Trending Shows</Link></li>
              <li className="nav-item"><Link to="/more/3" className="nav-link">Trending Celebs</Link></li>
              <li className="nav-item"><Link to="/more/4" className="nav-link">Now Playing</Link></li>
              <li className="nav-item"><Link to="/more/5" className="nav-link">Top Rated</Link></li>
              <li className="nav-item"><Link to="/more/6" className="nav-link">Up Coming</Link></li>
              <li className="nav-item"><Link to="/more/7" className="nav-link">Popular</Link></li>
              <li className="nav-item"><Link to="/more/8" className="nav-link">Airing Today TV</Link></li>
              <li className="nav-item"><Link to="/more/9" className="nav-link">Top Rated Shows</Link></li>
              <li className="nav-item"><Link to="/more/10" className="nav-link">Popular Tv Shows</Link></li>
              <li className="nav-item"><Link to="/more/11" className="nav-link">On The Air</Link></li>
              <li className="nav-item"><Link to="/more/12" className="nav-link">Celebrities</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default MobileNav
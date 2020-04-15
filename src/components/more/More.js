import React, {useState, useEffect} from 'react'
import MoreCard from './MoreCard';
import { Link } from 'react-router-dom'

async function getDataFromTmdb(url){
  let raw = await fetch(url);
  let res = await raw.json();
  
  return {results: res.results, tp: res.total_pages, page: res.page}
}

let dest = {
  1: "movie",
  2: "tv",
  3: "celebrity",
  4: "movie",
  5: "movie",
  6: "movie",
  7: "movie",
  8: "tv",
  9: "tv",
  10: "tv",
  11: "tv",
  12: "celebrity"
}

let header = {
  1: "Trending Movies",
  2: "Trending Tv Shows",
  3: "Trending Celebs",
  4: "Now Playing",
  5: "Top Rated",
  6: "Up Coming",
  7: "Popular",
  8: "Airing Today Tv",
  9: "Top Rated Shows",
  10: "Popular Tv Shows",
  11: "On The Air",
  12: "Celebrities"
}

let det = {
  1: "https://api.themoviedb.org/3/trending/movie/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020",
  2: "https://api.themoviedb.org/3/trending/tv/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020",
  3: "https://api.themoviedb.org/3/trending/person/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020",
  4: "https://api.themoviedb.org/3/movie/now_playing?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  5:  "https://api.themoviedb.org/3/movie/top_rated?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  6: "https://api.themoviedb.org/3/movie/upcoming?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  7: "https://api.themoviedb.org/3/movie/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  8: "https://api.themoviedb.org/3/tv/airing_today?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  9: "https://api.themoviedb.org/3/tv/top_rated?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  10: "https://api.themoviedb.org/3/tv/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  11: "https://api.themoviedb.org/3/tv/on_the_air?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1",
  12: "https://api.themoviedb.org/3/person/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1"
}



const More = (props) => {
  const [state, setState] = useState({showbutton: true,  page: 1, totalpages: 0, results: []})
  
  let id = props.match.params.id.toString();
  

  
  useEffect(() => {
    let url;
    if ((parseInt(id) === 1 ) || (parseInt(id) === 2 ) || (parseInt(id) === 3 )){
      url = det[id];
      getDataFromTmdb(url)
      .then(e => {
        console.log(e)
        setState({showbutton: false, totalpages: e.tp, results: e.results})
      })
      
    } else {
      let initial = det[id];
      initial = initial.slice(0, initial.length - 1)
      let page = state.page
      url = `${initial}${page}`
      getDataFromTmdb(url)
      .then(e => {
        console.log(e)
        
        setState({showbutton: true, totalpages: e.tp, results: e.results, page: e.page})
        
      })
      
    }
    document.querySelector('.sresult-body').scrollIntoView({behaviour: 'smooth'})

  },[state.page])

  function handleButton(e){
    
    if (e.target.className.includes('next')){
      if (state.page === state.totalpages + 1){
        return false
      } else {
        
        setState({...state, page: state.page + 1, results: []})
      }
    } else if (e.target.className.includes('prev')){
      if (state.page === 1){
        return false
      } else {
        
        setState({...state, page: state.page - 1, results: []})
      }
      
    }
  }

  let show = state.showbutton === false? '' :
  <div className="pagination">
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <ul className="pagination-group">
          <li className="pagination-item prev"><button href="" onClick={handleButton} className="pagination-link prev">Prev</button></li>
          
          <li className="pagination-item slow">Page <span className="showcurrentpage">{state.page}</span> </li>
          <li className="pagination-item"><button onClick={handleButton} className="pagination-link next">Next</button></li>
          
        </ul>
      </div>
    </div>
  </div>;

  let slow = state.results.map((each,index) => {
    return <MoreCard key={index} value={{obj: each, mtd: dest[id]}} />
  })

  return (
    <React.Fragment>
      <div className="sresult-body">
        <div className="large-banner-sresult">
          <h1 className="lbanner-header">{header[id]}</h1>
        </div>
        <section className="sr-search-result">
          <div className="sr-search-result-overlay">
            <div className="container">
              <div className="sr-wrapper">
                {slow}
                
              </div>
            </div>
          </div>
          
        </section>

        {show}
        
        <div className="plot-button-wrapper">
            
          <Link to="/" className="pb-2">Return</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default More
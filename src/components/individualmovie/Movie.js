import React, {useState, useEffect} from 'react'
import MovieDetails from './MovieDetails'
import MoviePlotFrame from './MoviePlotFrame'
import Casts from './Casts'
import SimilarMovies from './SimilarMovies'


function handleSimilar(arr){
  let length = arr.length > 10 ? 10 : arr.length;
  let res = [];
  for (let i = 0; i < length; i++){
    res.push(arr[i])
  }
  return res;

}

function handleDetails(det){
  let pc = '';
  let genre = '';
  det.genres.forEach(each => {
    genre += each.name + ', '
  })
  det.production_companies.forEach(each => {
    pc += each.name + ', '
  })
  genre = genre.slice(0,genre.length-2) || 'Not Available'
  pc = pc.slice(0,pc.length-2) || 'Not Available'
  let tagline = det.tagline || 'Not Available'
  let status = det.status || 'Not Available'
  let release_date = det.release_date || 'Not Available'
  let runtime = det.runtime || 'Not Available'
  let revenue = det.revenue.toLocaleString() || 'Not Available'
  let budget = det.budget.toLocaleString() || 'Not Available'
  let overview = det.overview
  let pp = det.poster_path || det.profile_path
  return {pc,tagline,status,release_date,runtime,revenue, budget,overview, genre, pp}
}



async function getDataFromTmdb(id){
  
  try {
    let raw = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    let raw2 = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=172584b5063d6cfe69ab1b6c4d4fe020`);
    let raw3 = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1`);
    let raw4 = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    
    let result = await raw.json();
    let result2 = await raw2.json();
    let result3 = await raw3.json();
    let result4 = await raw4.json();
    
    
    let filtered = result2.cast.filter(each => {
      return each.profile_path !== null;
    })
    let clean = filtered.filter(each => {
      return each.character.indexOf('uncredited') === -1;
    });
    const {genres,budget,overview,title,poster_path,production_companies,release_date,revenue,runtime,status,tagline} = result;
    const des = {genres,overview,budget,title,poster_path,production_companies,release_date,revenue,runtime,status,tagline}
    return {des,clean,result3,result4}
    
  } catch(err) {
    console.log(err.message);
  }
}

const Movie = (props) => {
  const [state, setState] = useState({details: {}, casts: [], similar: [], videourl: '', plot: ''})
  let id = props.match.params.id;
  
  
  
  

  useEffect(() => {
    getDataFromTmdb(id)
    .then(e => {
      
      let one = handleDetails(e.des)
      let two = e.clean
      let three = handleSimilar(e.result3.results)
      
      let four = e.result4.results.length === 0 ? false : `https://www.youtube.com/embed/${e.result4.results[0].key}`;
      
      setState({details: one, casts: two, similar: three, videourl: four, plot: one.overview})
      let bg = "url('https://image.tmdb.org/t/p/original" + one.pp + "')";
      const ins = document.querySelector('.movie-body');
      ins.style.backgroundImage = bg;
      document.querySelector('.movie-body').scrollIntoView({behaviour: 'smooth'})
    })
    
  },[])

  return (
    <React.Fragment>
      <div  className="movie-body">
        <div className="movie-overall-overlay">
          <MovieDetails value={state.details} />
          <MoviePlotFrame values={{url: state.videourl, overview: state.details.overview}} />
          <Casts value={state.casts} />
          <SimilarMovies value={state.similar} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Movie
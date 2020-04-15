import React, { useState, useEffect } from 'react'
import TvDetails from './TvDetails'
import TvPlotFrame from './TvPlotFrame'
import TvCasts from './TvCasts'
import TvSimilarMovies from './TvSimilarMovies'


function handleSimilar(arr){
  let length = arr.length > 10 ? 10 : arr.length;
  let res = [];
  for (let i = 0; i < length; i++){
    res.push(arr[i])
  }
  return res;

}


function handleDetails(obj){
  let pc = '';
  let cb = '';
  let ntw = '';
  
  
  let genre = '';
  obj.genres.forEach(each => {
    genre += each.name + ', '
  })
  obj.production_companies.forEach(each => {
    pc += each.name + ', '
  })
  if (obj.created_by.length === 0){
    cb = 'Not Available';
  } else {
    obj.created_by.forEach(each => {
      cb += each.name + ', '
    })
    cb = cb.slice(0,cb.length-2)
  }
  if (obj.networks.length === 0){
    ntw = 'Not Available';
  } else {
    obj.networks.forEach(each => {
      ntw += each.name + ', '
    })
    ntw = ntw.slice(0,ntw.length-2)
  }
  
  genre = genre.slice(0,genre.length-2) || 'Not Available'
  pc = pc.slice(0,pc.length-2) || 'Not Available'
  
  let vote = obj.vote_average || 'Not Available'
  
  let status = obj.status || 'Not Available'
  let fad = obj.first_air_date || 'Not Available'
  let overview = obj.overview
  let pp = obj.poster_path
  
  
  let ert = obj.episode_run_time[0] || 'Not Available'
  return {pc,fad,ntw,status,cb,vote, genre, overview,ert,pp}
}


async function getDataFromTmdb(id){
  
  try {
    let raw = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    let raw2 = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    let raw3 = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1`);
    let raw4 = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    
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
    const {status,vote_average,created_by,production_companies,poster_path,first_air_date,genres,episode_run_time,networks,overview} = result;
    const des = {status,vote_average,created_by,production_companies,poster_path,first_air_date,genres,episode_run_time,networks,overview}
    return {des,clean,result3,result4}
    
  } catch(err) {
    console.log(err.message);
  }
}


const Tv = (props) => {
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
      const ins = document.querySelector('.tv-body');
      ins.style.backgroundImage = bg;
      document.querySelector('.tv-body').scrollIntoView({behaviour: 'smooth'})
    })
    
  },[])
  
  return (
    <React.Fragment>
      <div className="tv-body">
        <div className="tv-overall-overlay">
          <TvDetails value={state.details} />
          <TvPlotFrame value={{plot: state.plot, url: state.videourl}} />
          {state.casts.length === 0? '' : <TvCasts value={state.casts} /> }
          
          <TvSimilarMovies value={state.similar} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Tv
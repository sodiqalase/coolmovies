import React, {useState, useEffect} from 'react'
import CelebrityDetails from './CelebrityDetails'
import Bio from './Bio'
import Featured from './Featured'
import { Link } from 'react-router-dom'

async function getDataFromTmdb(id){
  
  try {
    let raw = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);

    let raw2 = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US`);
    
    let result = await raw.json();
    let result2 = await raw2.json();
    
    
    const {birthday,known_for_department,name,place_of_birth,biography} = result2;

    let bd = birthday || 'not available';
    let kd = known_for_department || 'not available';
    let nam = name || 'not available';
    let pb = place_of_birth || 'not available';
    let bg = biography || 'not available';
    let pp = result2.profile_path || result2.poster_path
    
    const res = {bd,kd,nam,pb,bg,pp};
    return {details: res, featured: result.cast}
   
    
  } catch(err) {
    console.log(err.message);
  }
}


const Celebrity = (props) => {
  const [state, setState] = useState({details: {}, bio: '', featured: [] });
  let id = props.match.params.id;

  useEffect(() => {
    getDataFromTmdb(id)
    .then(e => {
      
      setState({details: e.details, bio: e.details.bg, featured: e.featured});
      let bg = "url('https://image.tmdb.org/t/p/original" + e.details.pp + "')";
      const ins = document.querySelector('.people-body');
      ins.style.backgroundImage = bg;
      document.querySelector('.people-body').scrollIntoView({behaviour: 'smooth'})
    })
  },[])
  
  return (
    <React.Fragment>
      <div className="people-body">
        <div className="people-overall-overlay">
          <CelebrityDetails value={state.details} />
          <Bio value={state.bio} />
          <Featured value={state.featured} />
        </div>
      </div>
      <div className="people-button-wrapper">
        <Link to="/" className="people-2">Return</Link>
      </div>
    </React.Fragment>
  )
}

export default Celebrity
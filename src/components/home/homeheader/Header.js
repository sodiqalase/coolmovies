import React, {useState} from 'react'

async function getDataFromTmdb(query,method){
  let url;
  if (method === 'shows'){
    url = `https://api.themoviedb.org/3/search/tv?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&query=${query}&page=1&include_adult=false`;
  } else if (method === 'movies'){
    url = `https://api.themoviedb.org/3/search/movie?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&query=${query}&page=1&include_adult=false`;
  } else if (method === 'celebrity'){
    url = `https://api.themoviedb.org/3/search/person?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1&query=${query}&include_adult=false`;
  }
  
  let raw = await fetch(url);
  let res = await raw.json();
  return res;
}

const Header = ({values}) => {
  const [formstate, setFormState] = useState({entry: '', method: ''})
  let func = values.func;
  let func2 = values.funct
  
  function handleClick (){
    func();
  }
  const handleChange = (e) => {
    
    setFormState({...formstate,[e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    console.log(e)
    let met = formstate.method
    let ent = formstate.entry
    
    func2(null, [], 'hide')
    
    
    if ((met === '' || met === 'Choose a search category' || met === undefined) || (ent === '' || ent === undefined)){
      func2(null, [],'dont');
      
    } else {
      getDataFromTmdb(ent,met)
      .then(e => {
        setFormState({entry: '', method: ''})
        
        let filtered = e.results.filter(each => {
          return each.profile_path || each.poster_path != null;
        })
        
        if (filtered.length === 0){
          func2(null, [], 'dont')
        } else {
          func2(met, filtered, true)
          
        }
      })
    }

      e.preventDefault()
  
  }


  return (
    <React.Fragment>
      <section className="cover">
    
        <img src="/assets/movie2min.jpg" alt="" className="img-scroll" />
        <div className="content">
          <nav className="navigation">
            <div className="container">
              <a href="./"  className="site-name">Cool Movies</a>
              <div className="right">
                <svg onClick={handleClick} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
              </div>
            </div>
          </nav>
          <h3>Search And Explore Your Favorite Movies, Tv Shows, and Celebrities </h3>
          <form onSubmit={handleSubmit} className="search-form">
            <div className="form-group">
              <input  type="text" onChange={handleChange} value={formstate.entry}  name="entry" className="search-input" placeholder="Enter Movie, Show Title / Celebrity Name" id="entry"/>
            </div>
            <div className="form-group">
              <select name="method" onChange={handleChange} value={formstate.method} id="entry" className="categories-select">  
                <option value="Choose a search category" >Choose a search category</option>
                <option value="movies">Movies</option>
                <option value="shows">TV Shows</option>
                <option value="celebrity">Celebrity</option>
              </select>
            </div>
            <div className="form-submit">
              <button className="submit-button">Search</button>
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Header



// import React from 'react'

// const Header = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Header
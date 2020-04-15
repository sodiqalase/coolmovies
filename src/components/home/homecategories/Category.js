import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'

async function getDataFromTmdb(url){
  let raw = await fetch(url);
  let res = await raw.json();
  return res;
}

const Category = ({values}) => {
  const [store, setStore] = useState({trending: []})

  useEffect(() => {
    
    getDataFromTmdb(values.url)
    .then(e => {
      
      setStore({trending: e.results});
    })
    .catch(err => {
      console.log(err.message)
    })
  },[])
  
  
  let paint = store.trending.map((each,index) => {
    return <CategoryCard key={index} id={each.id} name={each.name || each.title} rating={each.vote_average} pp={each.profile_path || each.poster_path} display={values.display} mtd={values.mtd} />
  })

  let direction = `/more/${values.path}`
  
  return (
    <React.Fragment>
      <section className="explore-ind-cat-1">
        <div className="category-header">
          <h4 className="category-title">{values.name}</h4>
          <Link to={direction} className="see-more">View All<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"/></svg></Link>
        </div>
        <div className="result-collection">
          <div className="result-container-1">
            {paint}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Category
import React from 'react'
import Category from './Category'


const CategoriesContainer = () => {
  

  return (
    <React.Fragment>
      <section className="explore-wrapper">
        <div className="explore-overlay">
          <Category values={{name: 'Trending Movies', url: "https://api.themoviedb.org/3/trending/movie/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020", display: true, mtd: 'movie', path: 1}} />
          <Category values={{name: 'Trending Tv Shows', url: "https://api.themoviedb.org/3/trending/tv/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020", display: true, mtd: 'tv', path: 2}} />
          <Category values={{name: 'Trending Celebs', url: "https://api.themoviedb.org/3/trending/person/day?api_key=172584b5063d6cfe69ab1b6c4d4fe020", display: false, mtd: 'celebrity', path: 3}} />
          <Category values={{name: 'Now Playing', url: "https://api.themoviedb.org/3/movie/now_playing?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'movie', path: 4}} />
          <Category values={{name: 'Top Rated', url: "https://api.themoviedb.org/3/movie/top_rated?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'movie', path: 5}} />
          <Category values={{name: 'Up Coming', url: "https://api.themoviedb.org/3/movie/upcoming?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'movie', path: 6}} />
          <Category values={{name: 'Popular', url: "https://api.themoviedb.org/3/movie/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'movie', path: 7}} />
          <Category values={{name: 'Airing Today Tv', url: "https://api.themoviedb.org/3/tv/airing_today?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'tv', path: 8}} />
          <Category values={{name: 'Top Rated Shows', url: "https://api.themoviedb.org/3/tv/top_rated?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'tv', path: 9}} />
          <Category values={{name: 'Popular Tv Shows', url: "https://api.themoviedb.org/3/tv/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'tv', path: 10}} />
          <Category values={{name: 'On The Air', url: "https://api.themoviedb.org/3/tv/on_the_air?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US", display: true, mtd: 'tv', path: 11}} />
          <Category values={{name: 'Celebrities', url: "https://api.themoviedb.org/3/person/popular?api_key=172584b5063d6cfe69ab1b6c4d4fe020&language=en-US&page=1", display: false, mtd: 'celebrity', path: 12}} />

        </div>  
      </section>
    </React.Fragment>
  )
}

export default CategoriesContainer
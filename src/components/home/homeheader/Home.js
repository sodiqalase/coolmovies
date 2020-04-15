import React, {useState, useEffect} from 'react'
import Header from './Header'
import MobileNav from './MobileNav'
import SearchComp from './SearchComp'
import Alert from './Alert'
import CategoriesContainer from '../homecategories/CategoriesContainer'




const Home = () => {
  const [store, setStore] = useState({isAlertShowing: false ,isNavOpen: false,isSearchCompOpen: false,searchresult: [],searchmethod: '', isRatingShowing: false, shouldscroll: false})

  useEffect(() => {

    if (store.shouldscroll){
      document.querySelector('.search-result').scrollIntoView({behaviour: 'smooth'})
    }
    if (store.isAlertShowing){
      setTimeout(() => {setStore({...store, isAlertShowing: false}); },2000)
    }
    
  }, [store]
  )
  
  const handleNav = () => {
    setStore({...store, isNavOpen: !store.isNavOpen, shouldscroll: false})
  }
  const handleSearch = (method,result,search) => {
    if (search === 'dont'){
      setStore({...store, isAlertShowing: true,searchresult: result, searchmethod: method, isSearchCompOpen: false, shouldscroll: false })
      
    } else if (search === true) {
      if (method === 'celebrity'){
        setStore({...store, searchresult: result, searchmethod: method, isSearchCompOpen: true, isRatingShowing: false, shouldscroll: true })
      } else if (method === 'tv' || 'movies')
      setStore({...store, searchresult: result, searchmethod: method, isSearchCompOpen: true, isRatingShowing: true, shouldscroll: true })
    } else if (search === 'hide'){
      setStore({...store, searchresult:result, searchmethod: method, isSearchCompOpen:false, shouldscroll: false})
    }
    
    
  }

  
  
  return (
    <React.Fragment>
      <MobileNav values={{nav: store.isNavOpen, func: handleNav}}  />
      <Header values={{func: handleNav, funct: handleSearch}} />
      {store.isSearchCompOpen ? <SearchComp values={{results: store.searchresult, method: store.searchmethod, rating: store.isRatingShowing}} /> : ''}
      <CategoriesContainer  />
      
      <Alert values={{nav:store.isAlertShowing}} />
      
     
    </React.Fragment>
  )
}

export default Home
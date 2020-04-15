import React from 'react'
import FeaturedCards from './FeaturedCards'


function reduceArray(arr){
  let filtered = arr.filter(each => {
    
    return each.poster_path !== null;
  })
  
  let final = [];
  let length = filtered.length > 50? 50 : filtered.length;
  for (let i = 0; i < length; i++){
    final.push(filtered[i])
  }
  return final

}

const Featured = ({value}) => {
  let res = reduceArray(value);
  
  let show = res.map((each, index) => {
    return <FeaturedCards key={index} value={each} index={index} />
  })
  return (
    <React.Fragment>
      <section className="people-wrapper">
        <div className="people-overlay">
          <section className="people-ind-cat">
            <div className="people-header">
              <h4 className="people-title">FEATURED IN</h4>
              
            </div>
            <div className="people-collection">
              <div className="people-container">
                {show}
              </div>    
            </div>    
          </section>      
        </div>
      </section>  
    </React.Fragment>
  )
}

export default Featured
import React from 'react'
import CastCard from './CastCard'

function reduceArray(arr){
  let final = [];
  let length = arr.length > 50? 50 : arr.length;
  for (let i = 0; i < length; i++){
    final.push(arr[i])
  }
  return final

}

const Casts = ({value}) => {
  
  let res = reduceArray(value);
  let show = res.map((each, index) => {
    return <CastCard key={index} value={each} />
  })
  
  return (
    <React.Fragment>
      <section className="cast">
        
        <div className="container">
          <h4 className="cast-header">Casts</h4>
          <div className="underline"></div>
          <div className="cast-wrapper">
            {show}
          </div>
        </div>
        
        
      </section>
    </React.Fragment>
  )
}

export default Casts
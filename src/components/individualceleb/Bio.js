import React from 'react'

const Bio = ({value}) => {
  return (
    <React.Fragment>
      <div className="bio">
        <div className="container">
          <div className="bio-content-wrapper">
            <h3 className="bio-header">Biography</h3>
            <div className="bio-underline"></div>
            <p className="bio-content">{value}</p>
          </div>
          
        </div>
        
        
      </div>
    </React.Fragment>
  )
}

export default Bio
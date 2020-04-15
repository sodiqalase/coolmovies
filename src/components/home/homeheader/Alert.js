import React from 'react'

const Alert = ({values}) => {
  let style = values.nav ? {display: 'flex'} : {display: 'none'} ;

  return (
    <React.Fragment>
      <div style={style} className="alert-index-page">
        <div className="alert-index-inner">
          <h2 className="alert-index-text">Sorry! There was no result for your entry. Please Search Again </h2>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Alert
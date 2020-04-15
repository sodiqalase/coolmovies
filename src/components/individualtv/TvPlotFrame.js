import React from 'react'

const TvPlotFrame = ({value}) => {
  let show = value.url === false? '' :
  <section className="tv-iframe">
    <div className="container">
      <iframe src={value.url} frameBorder="0" style={{width: '100%', height: '100%', background: 'black', marginTop: '0',marginButton: '0', marginRight: 'auto', marginLeft: 'auto'}} allowFullScreen></iframe>
    </div>
  </section> ;
  return (
    <React.Fragment>
      <div className="tv-plot">
        <div className="container">
          <div className="tv-plot-content">
            <h3 className="tv-overview-header">Overview</h3>
            <div className="tv-overview-underline"></div>
            <p className="tv-overview-content">{value.plot}</p>
          </div>
        </div>
        {show}
      </div>
  
      
    </React.Fragment>
  )
}

export default TvPlotFrame
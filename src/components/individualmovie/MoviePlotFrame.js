import React from 'react'


const MoviePlotFrame = ({values}) => {
  
  let imgurl = values.url;
  let show = values.url === false ? '' :
  <section className="movie-iframe">
    <div className="container">
      <iframe src={imgurl} frameBorder="0" style={{width: '100%', height: '100%', background: 'black', marginTop: '0',marginButton: '0', marginRight: 'auto', marginLeft: 'auto'}} allowFullScreen></iframe>
    </div>
  </section> ;
  
  return (
    <React.Fragment>
      <div className="movie-plot">
        <div className="container">
          <div className="movie-plot-content">
            <h3 className="plot-header">Movie Overview</h3>
            <div className="plot-underline"></div>
            <p className="plot-content">{values.overview}</p>
          </div>
        </div>
      </div>
      {show}
      
    </React.Fragment>
  )
}

export default MoviePlotFrame
import React from 'react';

const ShowItem = ({number, ids, title, year, poster, description, watchers, status, rating, genres}) => (
  // remove all id's!
  <div className="divTableRow">
    <div id="number" className="divTableCell">
      {number}
    </div>
    <div id="title" className="divTableCell">
      {title}
    </div>
    <div id="year" className="divTableCell">
      {year}
    </div>
    <div id="genres" className="divTableCell">
      {genres}
    </div>
    <div id="status" className="divTableCell">
      {status}
    </div>
    <div id="rating" className="divTableCell">
      {rating}
    </div>
    <div id="poster" className="divTableCell">
      {(poster === 'Image not found') ?
        (<p>Image not available</p>) :
        (<img src={poster} alt="Show Poster" />)
      } 
    </div>
    {watchers ? <div id="watchers" className="divTableCell">
      {watchers}
    </div> : null}
    <div id="description" className="divTableCell">
      {description}
    </div>
  </div>
)

export default ShowItem;
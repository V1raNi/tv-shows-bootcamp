import React from 'react';

const ShowItem = ({number, ids, title, year, poster, description, watchers, status, rating, genres}) => (
  // remove all id's!
  <div className="table-row">
    <div className="table-cell">
      {number}
    </div>
    <div className="table-cell">
      {title}
    </div>
    <div className="table-cell">
      {year}
    </div>
    <div className="table-cell">
      {genres}
    </div>
    <div className="table-cell">
      {status}
    </div>
    <div className="table-cell">
      {rating}
    </div>
    <div className="table-cell">
      {(poster === 'Image not found')
        ?
          <p>Image not available</p>
        :
          <img src={poster} alt="Show Poster" />
      } 
    </div>
    {watchers
      ?
        <div className="table-cell">
          {watchers}
        </div>
      :
        null
    }
    <div className="table-cell">
      {description}
    </div>
  </div>
)

export default ShowItem;
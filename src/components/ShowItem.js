import React from 'react';

const ShowItem = ({number, ids, title, year, poster, description, watchers}) => (
  <div className="show-item-row">
    <div id="number" className="cell">
      {number}
    </div>
    <div id="show-id" className="cell">
      {ids}
    </div>
    <div id="title" className="cell">
      {title}
    </div>
    <div id="year" className="cell">
      {year}
    </div>
    <div id="poster" className="cell">
      {poster}
    </div>
    <div id="watchers" className="cell">
      {watchers}
    </div>
    <div id="description" className="cell">
      {description}
    </div>
  </div>
)

export default ShowItem;
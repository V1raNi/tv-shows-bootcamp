import React from 'react';

const ShowItem = ({number, ids, title, year, poster, description, watchers}) => (
  <div className="divTableRow">
    <div id="number" className="divTableCell">
      {number}
    </div>
    <div id="show-id" className="divTableCell">
      {ids}
    </div>
    <div id="title" className="divTableCell">
      {title}
    </div>
    <div id="year" className="divTableCell">
      {year}
    </div>
    <div id="poster" className="divTableCell">
      {poster}
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
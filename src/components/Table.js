import React from 'react';


const Table = ( {page} ) => {
  return (
    <div className="divTableHeading">
      <div className="divTableRow">
        <div className="divTableHead">Number</div>
        <div className="divTableHead">Title</div>
        <div className="divTableHead">Year</div>
        <div className="divTableHead">Genres</div>
        <div className="divTableHead">Status</div>
        <div className="divTableHead">Rating</div>
        <div className="divTableHead">Poster</div>
        {page === 'trending' && (
          <div className="divTableHead">Watchers</div>
        )}
        <div className="divTableHead">Description</div>
      </div>
    </div>
  )
}

export default Table;
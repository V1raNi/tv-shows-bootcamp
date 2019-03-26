import React from 'react';

const TableHeader = ({page}) => {
  return (
    <div className="table-heading">
      <div className="table-row">
        <div className="table-head">№</div>
        <div className="table-head">Title</div>
        <div className="table-head">Year</div>
        <div className="table-head">Genres</div>
        <div className="table-head">Status</div>
        <div className="table-head">Rating</div>
        <div className="table-head">Poster</div>
        {page === 'trending' && (
          <div className="table-head">Watchers</div>
        )}
        <div className="table-head">Description</div>
      </div>
    </div>
  )
}

export default TableHeader;
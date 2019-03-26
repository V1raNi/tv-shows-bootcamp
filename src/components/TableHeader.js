import React from 'react';

const TableHeader = ({page}) => {
  return (
    // JUST ADD BUTTONS WITH LISTENERS WHICH GET CALLBACK AS A PROP, AND THE TABLE COMPONENT DOES THE SORTING (MAKE A GENERALIZED SORTING FUNCTION?)
    // SOMETHING LIKE IF SORTED = ASC THEN SORTED = DESC, FIRST TIME ALWAYS ASCENDING (OR DESC, ALWAYS MIX THEM UP)
    // DEFAULT STATUS IS SORTED BY RATING (NOT SURE) FOR POPULAR AND WATCHERS FOR TRENDING
    // CHANGE SORTING ICON DEPENDING ON SORTING? LIKE ARROW UP OR DOWN; MEANS WE GET SORTING STATUS HERE AS A PROP AS WELL
    // Popularity is calculated using the rating percentage and the number of ratings.
    // IT SEEMS WE NEED TO CREATE COME SORT OF 'DEFAULT' SORTING STATE AND MAKE IF SORTED = ASC || DEFAULT
    // ADD SOME LINE LIKE SORTED BY: ...
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
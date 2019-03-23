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

export default TableHeader;
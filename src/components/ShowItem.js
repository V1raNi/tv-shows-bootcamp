import React from 'react';

import imagePlaceholder from '../static/No_image_3x4.svg.png';

const ShowItem = ({number, title, year, poster, description, watchers, status, rating, genres}) => {

  // this could be done with state, but I don't want to rerender the component and introduce state here
  let modal = React.createRef();
  let descriptionRef = React.createRef();

  const onImgClick = () => {
    modal.current.style.display = 'block';
  }

  const onCrossClick = () => {
    modal.current.style.display = 'none';
  }

  const onDescriptionClick = (e) => {
    if (e.target.innerText === 'Show more') {
      descriptionRef.current.innerText = description;
      e.target.innerText = 'Show less';
    } else {
      descriptionRef.current.innerText = `${description.substring(0, 350)}...`;
      e.target.innerText = 'Show more';
    }
  }

  const renderDescription = () => {
    if ( description !== null && description.length > 350) {
      const descriptionFragment = description.substring(0, 350);
      const result = (
        <p className="description" ref={descriptionRef}>
          {`${descriptionFragment}...`}
        </p>
      );
      return result;
    } else {
      return <p className="description" ref={descriptionRef}>{description}</p>;
    }
  }

  return (
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
        {genres.replace(/\b\w/g, l => l.toUpperCase())}
      </div>
      <div className="table-cell">
        {status.replace(/\b\w/g, l => l.toUpperCase())}
      </div>
      <div className="table-cell">
        {rating}
      </div>
      <div className="table-cell">
        {(poster === 'Image not found')
          ?
            <img src={imagePlaceholder} alt="Not available" className="poster" />
          :
            <div className="image">
              <img onClick={onImgClick} src={poster} alt={`Poster of ${title}`} className="poster"/>
              <div className="modal" ref={modal}>
                <span onClick={onCrossClick} className="close">&times;</span>
                <img onClick={onImgClick} src={poster} alt={`Poster of ${title}`} className="modal-content"/>
                <p className="caption">{`Poster of ${title}`}</p>
              </div>
            </div>
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
        {renderDescription()}
      { description !== null ?
        description.length > 350 && (
          <p className="read-more" onClick={onDescriptionClick}><strong>Show more</strong></p>
        )
        :
          <p>Description is not available</p>
      }
      </div>
    </div>
  );
}

export default ShowItem;
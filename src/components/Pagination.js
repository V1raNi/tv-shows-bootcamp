import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i++;
  }

  return range;
}

class Pagination extends Component {

  fetchPageNumbers = () => {
    const totalPages = parseInt(this.props.totalPages, 10);
    const currentPage = parseInt(this.props.page, 10);
    const pageNeighbors = 2;

    const totalNumbers = (pageNeighbors * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);


      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  gotoPage = page => {
    const queryContent = {
      page
    };
    this.props.sendQuery(queryContent);
  }

  handleClick = page => e => {
    e.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = e => {
    e.preventDefault();
    const currentPage = parseInt(this.props.page, 10);
    // (this.pageNeighbors * 2) - 1
    this.gotoPage(currentPage - 3);
  }

  handleMoveRight = e => {
    e.preventDefault();
    const currentPage = parseInt(this.props.page, 10);
    // (this.pageNeighbors * 2) + 1
    this.gotoPage(currentPage + 5);
  }

  render() {
    if (this.totalPages === 1) return null;
    const pages = this.fetchPageNumbers();
    const currentPage = this.currentPage;
    return (
      <Fragment>
        <p>Page {this.props.page} out of {this.props.totalPages}</p>
        <nav aria-label="Pagination">
          <ul className="pagination" >
            { pages.map((page, index) => {

              if (page === LEFT_PAGE) return (
                <li key={index} className="page-item" style={{display: 'inline'}}>
                  <button className="page-link" href="#" aria-label="Previous" onClick={this.handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              );

              if (page === RIGHT_PAGE) return (
                <li key={index} className="page-item" style={{display: 'inline'}}>
                  <button className="page-link" href="#" aria-label="Next" onClick={this.handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              );

              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`} style={{display: 'inline'}}>
                  <button className="page-link" href="#" onClick={ this.handleClick(page) }>{ page }</button>
                </li>
              );

            }) }

          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Pagination;
